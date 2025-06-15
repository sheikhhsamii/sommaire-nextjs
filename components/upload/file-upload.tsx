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
import { useUploadThing } from "@/utils/uploadthing";
import toast from "react-hot-toast";

const FileUpload = () => {
  const form = useForm<UploadFileType>({
    resolver: zodResolver(UploadFileSchema),
  });
  const { startUpload } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      toast.dismiss();
      toast.success("Uploaded successfully!🎉");
    },
    onUploadError: (error) => {
      toast.dismiss();
      toast.error(error?.message || "Error uploading file❌");
    },
    onUploadBegin: () => {
      toast.loading("Processing your file...🗃️");
    },
  });
  const onSubmit = async (values: UploadFileType) => {
    const file = values?.file as File;
    console.log(file, "file");
    //Start Upload
    const res = await startUpload([file]);
    if (!res) {
      toast.error("Error uploading file❌");
      return;
    } 
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
          <Button
            disabled={form.formState.isSubmitting || !form.formState.isValid}
            type="submit"
          >
            {form.formState.isSubmitting ? "Uploading..." : "Upload your PDF"}
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default FileUpload;
