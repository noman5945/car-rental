"use client";
import { ShowMoreProps } from "@/types";
import React from "react";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handlePagination = () => {
    console.log((pageNumber + 1) * 10);
    const newPath = updateSearchParams("limit", String((pageNumber + 1) * 10));
    router.push(newPath, { scroll: false });
  };

  return (
    <div className=" w-full flex justify-center items-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          handleClick={handlePagination}
          contentStyle="rounded-full bg-blue-600 text-white hover:bg-blue-500 transition ease-in"
        />
      )}
    </div>
  );
};

export default ShowMore;
