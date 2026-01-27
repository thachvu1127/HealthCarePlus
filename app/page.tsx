import Image from "next/image";
import healthcare from "../public/logo/healthcare.jpg";
import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import onboarding from "../public/onboarding.jpeg";

export default function Home() {
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
            <h3>HealthCare+</h3>
          </Button>

          <PatientForm></PatientForm>
          <div className={"text-14-regular mt-10 flex justify-between gap-2"}>
            <p className={"justify-items-end text-dark-600 xl:text-left"}>
              © {currentYear} HealthCare+.
            </p>
            <Link href={"/?admin=true"} className={"text-green-500"}>
              Admin
            </Link>
          </div>
        </div>
      </section>
      <div className="relative hidden md:block w-1/2 h-full">
        <Image
          src={onboarding}
          alt={"onboarding"}
          fill
          quality={100}
          priority
          className={"object-cover"}
        />
      </div>
    </div>
  );
}
