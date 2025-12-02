-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "phone" TEXT,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);
