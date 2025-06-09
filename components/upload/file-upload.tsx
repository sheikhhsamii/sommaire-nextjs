"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FileHeader from "./file-header";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UploadFileSchema, UploadFileType } from "@/schema/upload-file-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const FileUpload = () => {
  const form = useForm<UploadFileType>({
    resolver: zodResolver(UploadFileSchema),
  });

  const onSubmit = async (values: UploadFileType) => {
    // Handle file upload here
    console.log(values);
    //Upload the file to uploadthing
    //parse the pdf using langchain
    //Summarize the pdf using AI
    //Save the Summary to the Database
    //Redirect to the [id] Summary Page
  };

  return (
    <section className="flex flex-col gap-4 items-center justify-center w-full my-12 md:my-24 relative z-10">
      <FileHeader />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full max-w-sm items-center space-x-2"
        >
          <FormField
            control={form.control}
            name="file"
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        onChange(file);
                      }
                    }}
                    {...field}
                    value={undefined}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Upload your PDF</Button>
        </form>
      </Form>
    </section>
  );
};

export default FileUpload;
