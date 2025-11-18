"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({
  link,
  content,
}: {
  link: string;
  content: string | React.ReactNode;
}) => {
  const activeLink = usePathname();

  return (
    <Link
      href={link}
      key={link}
      className={`text-black hover:text-blue-500 ${
        activeLink === link ? " text-blue-500 !important" : ""
      }`}
    >
      {content}
    </Link>
  );
};

export default NavItem;
