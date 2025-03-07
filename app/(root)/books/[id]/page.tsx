import { auth } from '@/auth';
import BookOverview from '@/components/BookOverview';
import { db } from '@/database/drizzle';
import { books } from '@/database/schema';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async ({params}: {params: Promise<{ id: string }>}) => {
    
    const id = (await params).id;
    const session = await auth();

    const [bookdetails] = await db.select().from(books).where(eq(books.id, id)).limit(1);

    if(!bookdetails) redirect("/404")

  return (
    <>
        <BookOverview {...bookdetails} userId={session?.user?.id as string} />
    </>
  )
}

export default page