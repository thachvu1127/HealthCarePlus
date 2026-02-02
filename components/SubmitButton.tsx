import React from "react";
import { Button } from "@/components/ui/button";
interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}
import loader from "@/public/loader.svg";
import Image from "next/image";
const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full cursor-pointer"}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src={loader}
            alt={"loader"}
            width={24}
            height={24}
            className="animate-spin"
          ></Image>
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};
export default SubmitButton;
