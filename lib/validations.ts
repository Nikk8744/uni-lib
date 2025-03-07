"use client"
 import { z } from "zod"

export const signUpSchema = z.object({
    fullName: z.string().min(3).max(100),
    email: z.string().email(),
    password: z.string().min(8).max(100),
    universityId: z.coerce.number(),
    universityCard: z.string().nonempty("University ID Card is required!!")
});

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(100),
})

export const bookSchema = z.object({
    title: z.string().min(3).max(100).trim(),
    description: z.string().min(3).max(1000).trim(),
    author: z.string().min(3).max(100).trim(),
    genre: z.string().min(3).max(50).trim(),
    rating: z.coerce.number().min(1).max(5),
    totalCopies: z.coerce.number().int().positive().lte(10000),
    // coverUrl: z.string(),
    // coverColor: z.string().trim().regex(/^#[0-9A-F]{6}$/i),
    // videoUrl: z.string(),
    summary: z.string().trim().min(10),
})