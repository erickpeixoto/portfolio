import * as React from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export const MenuToggle = ({
  toggle,
  isOpen,
}: {
  toggle: () => void;
  isOpen?: boolean;
}) => {
  return (
    <button
      onClick={toggle}
      className="outline-none border-none select-none cursor-pointer w-12 h-12 rounded-full bg-transparent"
    >
      {isOpen ? (
        <IoClose className="w-8 h-8 text-black dark:text-white" />
      ) : (
        <HiMenu className="w-8 h-8 text-black dark:text-white" />
      )}
    </button>
  );
};
