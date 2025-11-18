import { bugIcon } from "@/public/images";
import Image from "next/image";
import React from "react";
import { NavItem } from "../atoms";

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
    <div className="flex gap-3 px-4 py-3 items-center border border-1 mt-2">
      {items.map((item) => (
        <NavItem link={item.link} content={item.content} key={item.link} />
      ))}
    </div>
  );
};

export default Navbar;
