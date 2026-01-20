"use client";
import { Button } from "@radix-ui/themes";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

const LoginButton = () => {
  const { status } = useSession();
  const isAuth = status === "authenticated";
  return (
    <Button
      variant="solid"
      className="max-w-[200px]"
      onClick={() => {
        isAuth ? signOut() : signIn();
      }}
    >
      {isAuth ? "Sign out" : "Sign in"}
    </Button>
  );
};

export default LoginButton;
