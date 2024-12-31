"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";

const BookAvailableBadge = () => {
  return (
    <div className="flex justify-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
      Available
    </div>
  );
};

const BookCheckedOutBadge = () => {
  return (
    <div className="flex justify-center bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
      Checked Out
    </div>
  );
};

const BookUnavailableBadge = () => {
  return (
    <div className="flex justify-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
      Unavailable
    </div>
  );
};

const BookStatusErrorBadge = () => {
  return (
    <div className="flex justify-centerbg-yellow-100 bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
      Status Error
    </div>
  );
};

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Book = {
  bookId: string;
  title: string;
  author: string;
  isbn: string;
  owner: string;
  status: "available" | "checkedout" | "unavailable";
};

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const title = row.original.title;
      return (
        <div className="ml-3 font-bold">
          <Link href={`/books/details/${row.original.bookId}`}>{title}</Link>
        </div>
      );
    },
  },
  {
    accessorKey: "author",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Author
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "owner",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Book Owner
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "isbn",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ISBN
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.original.status;
      switch (status) {
        case "available":
          return <BookAvailableBadge />;
          break;
        case "checkedout":
          return <BookCheckedOutBadge />;
          break;
        case "unavailable":
          return <BookUnavailableBadge />;
          break;
        default:
          return <BookStatusErrorBadge />;
          break;
      }
    },
  },
];
