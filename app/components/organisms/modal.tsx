import { AlertDialog } from "@radix-ui/themes";
import React from "react";

const Modal = ({
  open,
  setOpen,
  title,
  desc,
  footerButtons,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  desc: string;
  footerButtons: React.ReactNode[];
}) => {
  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Content className="flex flex-col gap-4">
        <AlertDialog.Title>{title}</AlertDialog.Title>
        <AlertDialog.Description className=" flex flex-col ">
          {desc}
        </AlertDialog.Description>
        <div className="mt-4 flex gap-2 justify-start">
          {footerButtons.map((button, index) => (
            <React.Fragment key={index}>{button}</React.Fragment>
          ))}
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default Modal;
