// import { Button } from "@/components/ui/button"

import { auth } from "@/auth";
import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/components/constants";
import { db } from "@/database/drizzle";
import { books, users } from "@/database/schema";
import { desc } from "drizzle-orm";

export default async function Home() {

  const session = await auth();
  console.log(session)  

  const latestBook = (await db
      .select()
      .from(books)
      .limit(10)
      .orderBy(desc(books.createdAt))) as Book[];

    console.log(latestBook)

  // const results = await db.select().from(users);
  // console.log(JSON.stringify(results, null, 2))

  return (
    <>
      {/* <BookOverview {... sampleBooks[0]} /> */}
      <BookOverview {... latestBook[0]} userId={session?.user?.id as string} />
      
      {/* <BookList title="Latest Books" books={sampleBooks} containerClassName="mt-28"/> */}
      <BookList title="Latest Books" books={latestBook.slice(1)} containerClassName="mt-28"/>
    </>
  );
}
