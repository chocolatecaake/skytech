"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactSchema } from "@/lib/contactSchema";

import Title from "@/components/common/Title";
import Button from "@/components/common/Button";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const contacts = [
    {
      title: "Email Us",
      value: "info@skytechuae.com",
      icon: Mail,
    },
    {
      title: "Call Us",
      value: "+971 50 259 7150",
      icon: Phone,
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setSuccess(false);
    setSubmitError("");

    try {
      // Your form submission logic goes here
      console.log(data);

      setSuccess(true);
      reset();
    } catch (error) {
      setSubmitError("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <Image
        src="/assets/construction.webp"
        alt="Construction site background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid items-stretch gap-12 lg:grid-cols-2">
          {/* LEFT SIDE */}

          <div className="flex flex-col space-y-default">
            <div className="space-y-default">
              <Title
                pretitle="Get In Touch"
                header="Request A Quote"
                variant="light"
              />

              <p className="max-w-lg body-large text-white">
                Looking for reliable pipeline infrastructure solutions? Contact
                our team today and we’ll get back to you with the best solution
                for your project.
              </p>
            </div>

            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <div
                  key={contact.title}
                  className="glass rounded-default px-8 py-2 backdrop-blur-lg"
                >
                  <div className="flex items-center">
                    <div>
                      <p className="body-large text-yellow">
                        {contact.title}
                      </p>

                      <p className="body-large text-white">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FORM */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-default bg-background p-4 shadow-default space-y-small"
            aria-label="Request quote form"
          >
            {/* NAME */}

            <div>
              <label className="sr-only">Your Name</label>

              <input
                type="text"
                autoComplete="name"
                {...register("name")}
                placeholder="Your Name"
                className="form-field placeholder:text-gray-800"
              />

              {errors.name && (
                <p role="alert" className="text-sm text-secondary">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* EMAIL */}

            <div>
              <label className="sr-only">Email Address</label>

              <input
                type="email"
                autoComplete="email"
                {...register("email")}
                placeholder="Email Address"
                className="form-field placeholder:text-gray-800"
              />

              {errors.email && (
                <p role="alert" className="text-sm text-secondary">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PHONE */}

            <div>
              <label className="sr-only">Mobile Number</label>

              <input
                type="tel"
                autoComplete="tel"
                {...register("phone")}
                placeholder="Mobile Number"
                className="form-field placeholder:text-gray-800"
              />

              {errors.phone && (
                <p role="alert" className="text-sm text-secondary">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* COMPANY */}

            <input
              type="text"
              {...register("company")}
              placeholder="Company Name"
              className="form-field placeholder:text-gray-800"
            />

            {/* MESSAGE */}

            <div>
              <textarea
                rows={5}
                {...register("message")}
                placeholder="Tell us about your project"
                className="form-field resize-none placeholder:text-gray-800"
              />

              {errors.message && (
                <p role="alert" className="text-sm text-secondary">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* STATUS */}

            {success && (
              <p className="text-green-600">
                Thank you! Our team will contact you shortly.
              </p>
            )}

            {submitError && (
              <p className="text-secondary">
                {submitError}
              </p>
            )}

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                text={isSubmitting ? "Sending..." : "Request Quote"}
                variant="CTA"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;