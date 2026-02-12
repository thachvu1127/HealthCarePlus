import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import healthcare from "@/public/logo/healthcare.jpg";
import Link from "next/link";
import register from "@/public/register-img.png";
import RegisterForm from "@/components/forms/RegisterForm";
import { getUsers } from "@/lib/actions/patient.actions";

const Register = ({ params: { userId } }: SearchParamProps) => {
  const user = getUsers(userId);
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex h-screen max-h-screen">
      <section className={"remove-scrollbar container my-auto"}>
        <div className={"sub-container max-w-124 gap-3 items-start"}>
          <Button className={"hover:cursor-pointer"}>
            <Image
              src={healthcare}
              alt={"health care logo"}
              width={50}
              height={50}
              className={"rounded-xl h-10 w-fit"}
            />
            <h1>HealthCare+</h1>
          </Button>

          <RegisterForm></RegisterForm>

          <div className={"text-14-regular mx-auto mt-3 flex gap-2"}>
            <p className={"text-dark-600 xl:text-left"}>
              © {currentYear} HealthCare+.
            </p>
            <Link href={"/?admin=true"} className={"text-green-500"}>
              Admin
            </Link>
          </div>
        </div>
      </section>
      <div className="relative hidden md:block w-1/2 h-screen">
        <Image
          src={register}
          alt={"onboarding"}
          fill
          quality={100}
          priority
          sizes={"50vw"}
          className={"object-cover"}
        />
      </div>
    </div>
  );
};
export default Register;
