import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Library } from "lucide-react";

function Header() {
  return (
    <nav className="flex justify-between bg-gray-200 p-6">
      <div className="flex items-center flex-shrink-0 text-gray-600 mr-12">
        <Library />
        <Link href="/" className="mx-1 font-semibold text-xl tracking-tight">
          CoCo Library
        </Link>
      </div>
      {/* <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"> */}
      <div className="flex items-center gap-5">
        <Link href="/books" className="mx-6">
          <Button variant={"ghost"}>Book List</Button>
        </Link>
        <Link href="/books/add" className="mx-6">
          <Button className="bg-gray-600">Register Books</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
