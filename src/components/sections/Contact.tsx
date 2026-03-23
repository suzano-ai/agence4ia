"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Calendar, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(5, "Phone is required"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please describe your project"),
  budget: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Color bar accent */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-teal" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-12">
          <span className="section-title bg-teal text-white neu-border">
            {t("title")}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4">
              {t("heading")}
            </h2>
            <p className="text-foreground/70 mb-8">{t("subtitle")}</p>

            {status === "success" ? (
              <div className="neu-card p-8 text-center">
                <CheckCircle className="w-16 h-16 text-teal mx-auto mb-4" />
                <p className="text-lg font-semibold">{t("form.success")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">{t("form.fullName")} *</Label>
                    <Input
                      id="fullName"
                      {...register("fullName")}
                      className="neu-border"
                      placeholder="John Doe"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t("form.email")} *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="neu-border"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("form.phone")} *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className="neu-border"
                      placeholder="+33 6 12 34 56 78"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">{t("form.company")}</Label>
                    <Input
                      id="company"
                      {...register("company")}
                      className="neu-border"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">{t("form.service")} *</Label>
                  <Select onValueChange={(value) => setValue("service", value)}>
                    <SelectTrigger className="neu-border">
                      <SelectValue placeholder="Sélectionner..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="learnAI">
                        {t("form.serviceOptions.learnAI")}
                      </SelectItem>
                      <SelectItem value="integration">
                        {t("form.serviceOptions.integration")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-red-500 text-sm">{errors.service.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t("form.message")} *</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    className="neu-border min-h-[120px]"
                    placeholder="Décrivez votre projet..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">{t("form.budget")}</Label>
                  <Select onValueChange={(value) => setValue("budget", value)}>
                    <SelectTrigger className="neu-border">
                      <SelectValue placeholder="Sélectionner..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under500">
                        {t("form.budgetOptions.under500")}
                      </SelectItem>
                      <SelectItem value="500to1000">
                        {t("form.budgetOptions.500to1000")}
                      </SelectItem>
                      <SelectItem value="1000to5000">
                        {t("form.budgetOptions.1000to5000")}
                      </SelectItem>
                      <SelectItem value="over5000">
                        {t("form.budgetOptions.over5000")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-500">
                    <AlertCircle className="w-5 h-5" />
                    <p>{t("form.error")}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-teal hover:bg-teal/90 text-white font-bold py-6 neu-shadow"
                >
                  {status === "loading" ? (
                    t("form.submitting")
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {t("form.submit")}
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Booking */}
          <div>
            <div className="neu-card p-8 relative h-full">
              <div className="corner-dot corner-dot-tl bg-purple" />
              <div className="corner-dot corner-dot-br bg-amber" />

              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-20 h-20 bg-purple rounded-full flex items-center justify-center mb-6 neu-border">
                  <Calendar className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{t("booking.title")}</h3>
                <p className="text-foreground/70 mb-6 max-w-sm">
                  {t("booking.description")}
                </p>

                {/* Cal.com embed placeholder */}
                <div className="w-full p-8 bg-foreground/5 rounded-lg border-2 border-dashed border-foreground/20">
                  <p className="text-foreground/50 text-sm">
                    Cal.com booking widget
                  </p>
                  <p className="text-xs text-foreground/30 mt-2">
                    (Embed will be added here)
                  </p>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="mt-6 font-bold neu-border hover:bg-purple hover:text-white"
                >
                  <a
                    href="https://cal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Réserver un créneau
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
