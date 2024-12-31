import React from "react";
import { Book } from "../../columns";

const getBookById = async (bookId: string): Promise<Book[]> => {
  const res = await fetch(`http://localhost:3001/books?bookId=${bookId}`);
  console.log(JSON.stringify(res));
  const books = await res.json();
  return books;
};

export default async function BookDetailPage({
  params,
}: {
  params: { bookId: string };
}) {
  const books = await getBookById(params.bookId);
  const book = books[0];
  return (
    <div>
      <h1 className="text-2xl">{book.title}</h1>
      <code className="m-5 px-4 py-5 rounded-lg inline-flex bg-gray-800 text-white">
        {JSON.stringify(book)}
      </code>
    </div>
  );
}
