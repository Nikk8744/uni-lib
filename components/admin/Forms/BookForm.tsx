"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
//   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'
import { bookSchema } from '@/lib/validations'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { createBook } from '@/lib/admin/actions/book'
import { toast } from '@/hooks/use-toast'
interface Props extends Partial<Book> {
    type?: "create" | "update";
}

const BookForm = ({ type, ...book  }: Props) => {

    const router = useRouter();

    const form = useForm<z.infer<typeof bookSchema>>({
        resolver: zodResolver(bookSchema),
        defaultValues: {
            title: '',
            description: '',
            author: '',
            genre: '',
            rating: 1,
            totalCopies: 1,
            // coverUrl?: '',
            // coverColor?: '',
            // videoUrl?: '',
            summary: '',
        },
    })

    const onSubmit = async (values: z.infer<typeof bookSchema>) => {
        // console.log("The values are",values);    
        const result = await createBook(values);
        if (result.success) {
            toast({
                title: "Success",
                description: "Book created successfully",
            }) 
            router.push(`/admin/book${result.data.id}` ); 
        } else {
            toast({
                title: "Error",
                description: "Failed to create book",
                variant: "destructive"
            })
        }
    }

  return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name={"title"} 
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1'>
                        <FormLabel className='text-base font-normal text-dark-500'>Book Title</FormLabel>
                        <FormControl>
                            <Input required placeholder='Book title' {...field} className='book-form_input'/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                    />
                
                <FormField
                    control={form.control}
                    name={"author"} 
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1'>
                        <FormLabel className='text-base font-normal text-dark-500'>Book Author</FormLabel>
                        <FormControl>
                            <Input required placeholder='Book author' {...field} className='book-form_input'/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                    />

                <FormField
                    control={form.control}
                    name={"genre"} 
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1'>
                        <FormLabel className='text-base font-normal text-dark-500'>Book Genre</FormLabel>
                        <FormControl>
                            <Input required placeholder='Book genre' {...field} className='book-form_input'/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                    />

                <FormField
                    control={form.control}
                    name={"rating"} 
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1'>
                        <FormLabel className='text-base font-normal text-dark-500'>Book Rating</FormLabel>
                        <FormControl>
                            <Input required type='number' min={1} max={5} placeholder='Book rating' {...field} className='book-form_input'/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                    />
                
                <FormField
                    control={form.control}
                    name={"totalCopies"} 
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1'>
                        <FormLabel className='text-base font-normal text-dark-500'>Total Copies</FormLabel>
                        <FormControl>
                            <Input required type='number' min={5} max={10000} placeholder='Total copies' {...field} className='book-form_input'/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                    />
                
              

                {/* color picker */}

                <FormField
                    control={form.control}
                    name={"description"} 
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1'>
                        <FormLabel className='text-base font-normal text-dark-500'>Book Description</FormLabel>
                        <FormControl>
                            <Textarea placeholder='Book description' {...field}  rows={5} className='book-form_input'/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                    />
                
                

                <FormField
                    control={form.control}
                    name={"summary"} 
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1'>
                        <FormLabel className='text-base font-normal text-dark-500'>Book Summary</FormLabel>
                        <FormControl>
                            <Textarea placeholder='Book summary' {...field}  rows={5} className='book-form_input'/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                    />

                <Button type="submit" className='book-form_btn text-white' >+ Add Book to Library</Button>
            </form>
        </Form>

  )
}

export default BookForm 