import React from "react";
import { Book, columns } from "./columns";
import { DataTable } from "../components/DataTable";

const getBooks = async (): Promise<Book[]> => {
  const res = await fetch("http://localhost:3001/books", {
    cache: "no-cache",
  });
  const books = await res.json();
  return books;
};

export default async function BooksPage() {
  const books = await getBooks();

  return (
    <div className="m-5">
      <DataTable columns={columns} data={books} />
    </div>
  );
}
