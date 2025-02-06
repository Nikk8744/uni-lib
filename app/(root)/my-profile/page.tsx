import { signOut } from '@/auth';
import BookList from '@/components/BookList';
import { sampleBooks } from '@/components/constants';
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <>  <h1 className='text-white text-center text-3xl font-semibold mb-10'>My Profile</h1>
        <form action={ async () => {
            "use server";

            await signOut();

        }} className='mb-10'>
            <Button>Logout</Button>
        </form>
        <BookList title='Borrowed Books' books={sampleBooks} />
    </>
  )
}

export default page