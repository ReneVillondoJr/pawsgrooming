-- CreateTable
CREATE TABLE "ContactPage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "dogName" TEXT,
    "dogBreed" TEXT,
    "service" TEXT,

    CONSTRAINT "ContactPage_pkey" PRIMARY KEY ("id")
);
