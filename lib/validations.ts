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