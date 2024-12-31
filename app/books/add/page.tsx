"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const formSchema = z.object({
  title: z.string().nonempty().max(50),
  author: z.string().nonempty().max(50),
  isbn: z.string().nonempty().min(13).max(13),
  owner: z.string().nonempty().max(50),
  status: z.enum(["available", "unavailable"]),
});

const BookAddPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      author: "",
      isbn: "",
      owner: "",
      status: "available",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Book Title</FormLabel>
              <FormControl>
                <Input placeholder="例: 星の王子さま" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input placeholder="例: サン テグジュペリ" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isbn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ISBN (International Standard Book Number)</FormLabel>
              <FormControl>
                <Input placeholder="例: 9784102122044" {...field} />
              </FormControl>
              <FormDescription>
                書籍や資料を識別するための国際規格コード（13桁の数字）
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="owner"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Book Owner</FormLabel>
              <FormControl>
                <Input placeholder="例: Taro Yamada" {...field} />
              </FormControl>
              <FormDescription>この書籍の所有者</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="unavailable">Unavailable</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                <code>Available</code>: 誰でもこの本を借りることができます
                <br />
                <code>Unavailable</code>:
                この本を借りることができない状態にあります
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-gray-600" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default BookAddPage;
