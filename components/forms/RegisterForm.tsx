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
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { registerSchema } from "@/lib/validations/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { z } from "zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RegisterForm = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      birthDate: new Date(),
      gender: "male",
    },
  });
  return (
    <div className={"w-full max-w-md  p-6 shadow-sm "}>
      <form className={"space-y-6 flex-1"}>
        <section className={"space-y-6 flex-1"}>
          <h2 className={"text-24-bold"}>Welcome,</h2>
          <p className={"text-dark-700"}>Tell us more about yourself</p>
        </section>

        <FieldSet className={"w-full"}>
          <FieldLegend>Personal Information</FieldLegend>
          <FieldGroup className={"flex"}>
            <Controller
              name={"name"}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldContent>
                    <FieldLabel htmlFor={"name"}>Full Name</FieldLabel>
                  </FieldContent>
                  <Input
                    {...field}
                    id={"name"}
                    placeholder={"John Doe"}
                    aria-invalid={fieldState.invalid}
                    autoComplete={"off"}
                  ></Input>
                </Field>
              )}
            ></Controller>
            <FieldGroup className={"grid grid-cols-2 gap-4"}>
              <Controller
                name={"email"}
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={"email"}>Email</FieldLabel>
                    <Input
                      {...field}
                      id={"email"}
                      placeholder={"Johndoe@gmail.com"}
                      aria-invalid={fieldState.invalid}
                      autoComplete={"off"}
                      className={"input-phone w-full text-sm"}
                    ></Input>
                  </Field>
                )}
              ></Controller>
              <Controller
                name={"phone"}
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
                    <PhoneInput
                      id={field.name}
                      {...field}
                      defaultCountry={"US"}
                      className={"input-phone w-full"}
                      international
                      withCountryCallingCode
                    ></PhoneInput>
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]}></FieldError>
                    )}
                  </Field>
                )}
              ></Controller>
            </FieldGroup>
            <FieldGroup className={"grid grid-cols-2 gap-4"}>
              <Controller
                name={"birthDate"}
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="date">Date of birth</FieldLabel>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          id="date"
                          className="justify-start font-normal"
                        >
                          {date ? date.toLocaleDateString() : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        {...field}
                        className="w-full overflow-hidden p-2"
                        align="start"
                      >
                        <Calendar
                          className={"p-2"}
                          mode="single"
                          selected={date}
                          defaultMonth={date}
                          captionLayout="dropdown"
                          onSelect={(date) => {
                            setDate(date);
                            setOpen(false);
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </Field>
                )}
              ></Controller>
              <Field>
                <FieldLabel>Gender</FieldLabel>
                <Select>
                  <SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value={"male"}>Male</SelectItem>
                        <SelectItem value={"female"}>Female</SelectItem>
                        <SelectItem value={"other"}>Other</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </SelectTrigger>
                </Select>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  );
};
export default RegisterForm;

// FieldSet is used to group things logically together
// FieldGroup purely for visuals
