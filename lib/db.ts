import pkg from "@prisma/client";

const { PrismaClient } = pkg;

declare global {
  var prisma: PrismaClient | undefined;
};

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db