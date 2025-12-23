import { Text } from "@radix-ui/themes";
import React from "react";
import { Skeleton } from "@components";
const Loading = () => {
  return (
    <div className="grid grid-cols-4 p-3 items-center gap-y-4 sm:gap-0">
      <div className="col-span-4 sm:col-span-3 flex gap-6 flex-col px-2">
        <Text size="7" className="text-start">
          <Skeleton width={100} />
        </Text>

        <div className="flex items-center gap-8  ">
          <Skeleton width={100} />

          <Text size="2">
            <Skeleton width={100} />
          </Text>
        </div>

        <div className="border w-100  w-full  px-2 py-4 rounded-xl max-w-[600px]">
          <Skeleton width={200} />
        </div>
      </div>
      <div className="col-span-4 sm:col-span-1 px-2">
        <div className="flex flex-col gap-2 ">
          <Skeleton width={200} />
          <Skeleton width={200} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
