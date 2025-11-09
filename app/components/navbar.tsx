"use client";
import { bugIcon } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const activeLink = usePathname();
  const NavItem = (link: string, content: string | React.ReactNode) => {
    return (
      <Link
        href={link}
        key={link}
        className={`text-gray-500 hover:text-black ${
          activeLink === link ? "text-black" : ""
        }`}
      >
        {content}
      </Link>
    );
  };
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
      {items.map((item) => NavItem(item.link, item.content))}
    </div>
  );
};

export default Navbar;
