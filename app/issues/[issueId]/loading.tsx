import { Text } from "@radix-ui/themes";
import React from "react";
import { Skeleton } from "@components";
const Loading = () => {
  return (
    <div>
      <div className="my-7 flex flex-col justify-start items-start gap-x-2 gap-y-6">
        <Text size="7" className="text-start">
          <Skeleton width={200} />
        </Text>
        <div className="flex justify-between w-[70vw]  items-center ">
          <div className="flex items-center gap-2 ">
            <Skeleton width={50} />
            <Text size="2">
              <Skeleton width={80} />
            </Text>
          </div>

          <Skeleton width={80} />
        </div>
        <div className="border  md:w-[70vw] px-2 py-4 rounded-xl">
          <Skeleton className="min-w-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
