"use client";

import { useState } from "react";
import { useId } from "react";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<"input"> & { label: string }) {
  let id = useId();

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  );
}

function CheckboxInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<"input"> & { label: string }) {
  return (
    <label className="flex items-center gap-x-3">
      <input
        type="checkbox"
        {...props}
        className="h-6 w-6 rounded border-neutral-300 text-neutral-950 focus:ring-neutral-950"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  );
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<"input"> & { label: string }) {
  return (
    <label className="flex items-center gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 border-neutral-300 text-neutral-950 focus:ring-neutral-950"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  );
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    requestTypes: [] as string[],
    services: [] as string[],
    products: [] as string[],
    contactPreference: "email",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const isChecked = (e.target as HTMLInputElement).checked;
      const arrayName = name as "requestTypes" | "services" | "products";
      setFormData((prev) => ({
        ...prev,
        [arrayName]: isChecked
          ? [...prev[arrayName], value]
          : prev[arrayName].filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
          requestTypes: [],
          services: [],
          products: [],
          contactPreference: "email",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = ["Digital Printing", "Finishing Hijab", "Garment"];

  const products = [
    "Plain Fabric",
    "Digital Print Fabric",
    "Plain Hijab",
    "Digital Print Hijab",
    "Moslemwear",
    "Hijab+ Technology",
  ];

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-center font-semibold text-neutral-950">
          There's nothing wrong with asking!
          <br />
          Please fill out the following form for more information.
        </h2>

        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
          />
          <TextInput
            label="Phone Number"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextInput
            label="Information you want to know"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                Request Type
              </legend>
              <div className="mt-6 flex gap-8">
                <CheckboxInput
                  label="Services"
                  name="requestTypes"
                  value="services"
                  checked={formData.requestTypes.includes("services")}
                  onChange={handleChange}
                />
                <CheckboxInput
                  label="Products"
                  name="requestTypes"
                  value="products"
                  checked={formData.requestTypes.includes("products")}
                  onChange={handleChange}
                />
              </div>
            </fieldset>
          </div>
          {formData.requestTypes.includes("services") && (
            <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
              <fieldset>
                <legend className="text-base/6 text-neutral-500">
                  Services
                </legend>
                <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  {services.map((service) => (
                    <CheckboxInput
                      key={service}
                      label={service}
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleChange}
                    />
                  ))}
                </div>
              </fieldset>
            </div>
          )}
          {formData.requestTypes.includes("products") && (
            <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
              <fieldset>
                <legend className="text-base/6 text-neutral-500">
                  Products
                </legend>
                <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  {products.map((product) => (
                    <CheckboxInput
                      key={product}
                      label={product}
                      name="products"
                      value={product}
                      checked={formData.products.includes(product)}
                      onChange={handleChange}
                    />
                  ))}
                </div>
              </fieldset>
            </div>
          )}
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                Prefer to be contacted via
              </legend>
              <div className="mt-6 flex gap-8">
                <RadioInput
                  label="WhatsApp"
                  name="contactPreference"
                  value="whatsapp"
                  checked={formData.contactPreference === "whatsapp"}
                  onChange={handleChange}
                />
                <RadioInput
                  label="Email"
                  name="contactPreference"
                  value="email"
                  checked={formData.contactPreference === "email"}
                  onChange={handleChange}
                />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10" disabled={isSubmitting} invert>
          {isSubmitting ? "Submitting..." : "Let's work together"}
        </Button>
        {submitStatus === "success" && (
          <p className="mt-4 text-green-600">Message sent successfully!</p>
        )}
        {submitStatus === "error" && (
          <p className="mt-4 text-red-600">
            Error sending message. Please try again.
          </p>
        )}
      </form>
    </FadeIn>
  );
}
