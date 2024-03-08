import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

// Example: Get all products
export default async function handler(req, res) {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
}