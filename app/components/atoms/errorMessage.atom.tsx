import { Text } from "@radix-ui/themes";
import React from "react";

const ErrorMesssage = ({ error }: { error: string }) => {
  return (
    <>
      {error && (
        <Text size="1" color="red" className="mt-1">
          {error}
        </Text>
      )}
    </>
  );
};

export default ErrorMesssage;
