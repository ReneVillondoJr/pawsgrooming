"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@pawsgrooming.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        setError(data.error || "Unable to sign in as admin.");
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Unable to contact the server right now.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-5xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid w-full gap-8 rounded-3xl border border-amber-100 bg-white p-8 shadow-xl lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-700">Admin access</p>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Sign in to the booking dashboard</h1>
            <p className="max-w-xl text-lg text-gray-600">
              Use the database-backed admin login to review client bookings. The first sign-in initializes the admin account with the configured credentials.
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>• Uses the existing Prisma database connection.</li>
              <li>• Creates the admin user automatically if it does not exist yet.</li>
              <li>• Stores a secure session cookie for the admin area.</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-amber-100 bg-amber-50/70 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">Admin login</h2>
            <p className="mt-2 text-sm text-gray-600">Enter your database admin credentials.</p>

            <div className="mt-6 space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="mt-1 w-full rounded-xl border border-amber-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none ring-0 transition focus:border-amber-500"
                  placeholder="admin@example.com"
                  required
                />
              </label>

              <label className="block text-sm font-medium text-gray-700">
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="mt-1 w-full rounded-xl border border-amber-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none ring-0 transition focus:border-amber-500"
                  placeholder="Enter password"
                  required
                />
              </label>
            </div>

            {error ? <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}

            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-amber-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700 disabled:cursor-not-allowed disabled:bg-amber-400"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <p className="mt-4 text-xs text-gray-500">Tip: set ADMIN_EMAIL and ADMIN_PASSWORD in your environment to override the default bootstrap credentials.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
