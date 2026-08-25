import crypto from "crypto";

export const ADMIN_SESSION_COOKIE = "admin_session";
export const DEFAULT_ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@pawsgrooming.com";
export const DEFAULT_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Admin123!";

function toBase64Url(value: string) {
  return Buffer.from(value).toString("base64url");
}

function fromBase64Url(value: string) {
  return Buffer.from(value, "base64url").toString("utf8");
}

export function hashPassword(password: string) {
  const salt = crypto.randomBytes(16).toString("hex");
  const iterations = 100000;
  const hash = crypto
    .pbkdf2Sync(password, salt, iterations, 64, "sha256")
    .toString("hex");

  return `pbkdf2$${iterations}$${salt}$${hash}`;
}

export function verifyPassword(password: string, storedHash?: string | null) {
  if (!storedHash || !storedHash.startsWith("pbkdf2$")) {
    return false;
  }

  const [algo, iterationsText, salt, expectedHash] = storedHash.split("$");
  if (!algo || !iterationsText || !salt || !expectedHash) {
    return false;
  }

  const iterations = Number(iterationsText);
  const candidateHash = crypto
    .pbkdf2Sync(password, salt, iterations, 64, "sha256")
    .toString("hex");

  return candidateHash === expectedHash;
}

export function createAdminSession(email: string, role: string) {
  const secret = process.env.ADMIN_SESSION_SECRET || "dev-admin-session-secret";
  const payload = {
    email,
    role,
    exp: Date.now() + 8 * 60 * 60 * 1000,
  };

  const header = toBase64Url(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const body = toBase64Url(JSON.stringify(payload));
  const signature = crypto
    .createHmac("sha256", secret)
    .update(`${header}.${body}`)
    .digest("base64url");

  return `${header}.${body}.${signature}`;
}

export function verifyAdminSession(token?: string | null) {
  if (!token) {
    return null;
  }

  const parts = token.split(".");
  if (parts.length !== 3) {
    return null;
  }

  const [header, body, signature] = parts;
  const secret = process.env.ADMIN_SESSION_SECRET || "dev-admin-session-secret";
  const expected = crypto
    .createHmac("sha256", secret)
    .update(`${header}.${body}`)
    .digest("base64url");

  if (signature !== expected) {
    return null;
  }

  try {
    const payload = JSON.parse(fromBase64Url(body)) as {
      email?: string;
      role?: string;
      exp?: number;
    };

    if (!payload.email || !payload.role || !payload.exp || payload.exp < Date.now()) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}
