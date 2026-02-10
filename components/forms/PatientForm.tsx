"use client";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { formSchema, FormValues } from "@/lib/validations/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import userImage from "../../public/user.svg";
import email from "../../public/email.svg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import SubmitButton from "@/components/SubmitButton";
import { useState } from "react";
import { createUser } from "@/lib/actions/patient.actions";
import { useRouter } from "next/navigation";

const PatientForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "" },
    mode: "onSubmit",
  });

  async function onsubmit(data: FormValues) {
    // Simulate API call - replace it with actual API logic later
    setLoading(true);
    try {
      const { name, email, phone } = data;
      const newUser = await createUser({ name, email, phone });
      if (newUser) {
        router.push(`/patients/${newUser.$id}/register`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={"w-full max-w-md  p-6 shadow-sm "}>
      <form
        className={"space-y-6 flex-1"}
        onSubmit={form.handleSubmit(onsubmit)}
      >
        <FieldSet>
          <FieldLegend className={"header"}>
            Your Health, Our Priority
          </FieldLegend>
          <FieldDescription className={"text-dark-700"}>
            Get Started with Appointments.
          </FieldDescription>
          <FieldGroup>
            {/* --- Full Name --*/}
            <Controller
              name={"name"}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="name">Full name</FieldLabel>
                  <div className="relative">
                    <Image
                      src={userImage}
                      alt={"icon"}
                      height={24}
                      width={24}
                      className="absolute left-3 top-1/2 -translate-y-1/2"
                    />
                    <Input
                      {...field}
                      id="name"
                      autoComplete="off"
                      aria-invalid={fieldState.invalid}
                      placeholder="John Doe"
                      className={`pl-10 ${fieldState.invalid ? "sha-error" : ""}`}
                    />
                  </div>

                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]}></FieldError>
                  )}
                </Field>
              )}
            />

            <FieldSeparator className={"bg-white h-[0.1px]"}></FieldSeparator>
            <Controller
              name={"email"}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">Email address</FieldLabel>
                  <div className="relative">
                    <Image
                      src={email}
                      alt={"icon"}
                      height={24}
                      width={24}
                      className="absolute left-3 top-1/2 -translate-y-1/2"
                    />
                    <Input
                      {...field}
                      id="email"
                      autoComplete="off"
                      aria-invalid={fieldState.invalid}
                      placeholder="Johndoe@example.com"
                      className={`pl-10 ${fieldState.invalid ? "sha-error" : ""}`}
                    />
                  </div>
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]}></FieldError>
                  )}
                </Field>
              )}
            />
            <Controller
              name={"phone"}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                  <div>
                    <PhoneInput
                      {...field}
                      defaultCountry={"US"}
                      className={"input-phone"}
                      international
                      withCountryCallingCode
                    ></PhoneInput>
                  </div>
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]}></FieldError>
                  )}
                </Field>
              )}
            ></Controller>
          </FieldGroup>
        </FieldSet>
        <div className={"flex flex-col justify-center gap-2"}>
          <Button
            onClick={() => form.reset()}
            variant={"outline"}
            disabled={!form.formState.isDirty}
            className={form.formState.isDirty ? "hover:cursor-pointer" : ""}
          >
            Reset
          </Button>
          <SubmitButton isLoading={form.formState.isSubmitting}>
            Get Started
          </SubmitButton>
        </div>
      </form>
    </div>
  );
};
export default PatientForm;
