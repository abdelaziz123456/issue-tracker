import React from "react";
import { Skeleton } from "@components";
const FormSkeleton = () => {
  return (
    <div className=" flex flex-col gap-7 my-6 mx-4">
      <Skeleton width={"full"} />
      <Skeleton width={"full"} height={"22vh"} />
      <Skeleton width={"150px"} height={"40px"} />
    </div>
  );
};

export default FormSkeleton;
