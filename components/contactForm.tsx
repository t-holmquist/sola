'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ShadButton } from "./ui/shadButton"
import { Textarea } from "./ui/textarea"

import { sendEmail } from '@/actions/sendEmail'
import { useState } from "react"
import { motion } from "framer-motion"


const formSchema = z.object({
    email: z.string().email({ message: 'Ugyldig email' }).min(5).max(50),
    message: z.string().max(1000),
  })


export default function ContactForm() {


    const [isEmailSent, setIsEmailSent] = useState(false);


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const response = await sendEmail(values)

        if(response) {
          setIsEmailSent(true)
        }

    }

  return (
    <Form {...form}>
      <form id="contact" onSubmit={form.handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-6 w-[320px] md:w-[500px]">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="Din email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Besked"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ShadButton type="submit" className="w-fit self-center">Send email</ShadButton>
        {isEmailSent && (
          <motion.p 
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={
            isEmailSent ? {opacity: 1, y: 20} : {opacity: 0, y:0}
          }
          className="text-primary2 font-sans text-sm font-semibold" >Tak for din besked!</motion.p>
        )}
      </form>
    </Form>
  )
}


