"use client";
import {
  Field,
  FieldContent,
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
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { formSchema, FormValues } from "@/lib/validations/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

const PatientForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "" },
  });

  function onsubmit(data: FormValues) {
    console.log(data);
  }
  return (
    <div className={"w-full max-w-md  p-6 shadow-sm "}>
      <form
        className={"space-y-4 flex flex-col justify-center"}
        onSubmit={form.handleSubmit(onsubmit)}
      >
        <FieldSet>
          <FieldLegend className={"header"}>
            Your Health, Our Priority
          </FieldLegend>
          <FieldDescription>Get Started with Appointments.</FieldDescription>
          <FieldGroup>
            {/* --- Full Name --*/}
            <Controller
              name={"name"}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="name">Full name</FieldLabel>
                  <Input
                    {...field}
                    id="name"
                    autoComplete="off"
                    aria-invalid={fieldState.invalid}
                    placeholder="John Doe"
                    className={fieldState.invalid ? "border-red-500" : ""}
                  />
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
                  <Input
                    {...field}
                    id="email"
                    autoComplete="off"
                    aria-invalid={fieldState.invalid}
                    placeholder={"example@gmail.com"}
                    className={fieldState.invalid ? "border-red-500" : ""}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]}></FieldError>
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </FieldSet>
        <div className={"flex flex-col gap-4 justify-center"}>
          <Button onClick={() => form.reset()} variant={"outline"}>
            Reset
          </Button>
          <Button role={"button"} variant={"outline"} className={"mt-4 "}>
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};
export default PatientForm;
