import { bugIcon } from "@/public/images";
import Image from "next/image";
import React from "react";
import { LoginButton, NavItem } from "../atoms";

const Navbar = () => {
  const items = [
    {
      link: "/",
      content: <Image src={bugIcon} alt="Bug Icon" width={24} height={24} />,
    },
    { link: "/issues", content: "Issues" },
    { link: "/issues/new", content: "New Issue" },
  ];

  return (
    <div className="border border-1 mt-2 flex justify-between items-center px-4 py-3">
      <div className="flex gap-3  items-center ">
        {items.map((item) => (
          <NavItem link={item.link} content={item.content} key={item.link} />
        ))}
      </div>
      <LoginButton />
    </div>
  );
};

export default Navbar;
