// import { Button } from "@/components/ui/button"

import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/components/constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

export default async function Home() {

  const results = await db.select().from(users);
  console.log(JSON.stringify(results, null, 2))

  return (
    <>
      <BookOverview {... sampleBooks[0]} />
      
      <BookList title="Latest Books" books={sampleBooks} containerClassName="mt-28"/>
    </>
  );
}
