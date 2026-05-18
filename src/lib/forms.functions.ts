import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  service: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(5).max(2000),
});

export const submitContactInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("contact_inquiries").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      service: data.service || null,
      message: data.message,
    });
    if (error) {
      console.error("contact_inquiries insert failed", error);
      return { ok: false as const, error: "Anfrage konnte nicht gespeichert werden." };
    }
    return { ok: true as const };
  });

const jobSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  position: z.string().trim().min(2).max(150),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export const submitJobApplication = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => jobSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("job_applications").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      position: data.position,
      message: data.message || null,
    });
    if (error) {
      console.error("job_applications insert failed", error);
      return { ok: false as const, error: "Bewerbung konnte nicht gespeichert werden." };
    }
    return { ok: true as const };
  });
