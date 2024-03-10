"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Separator } from "./separator";

interface ModalComponentProps {
  children: React.ReactNode;
  title: string;
}

export default function ModalComponent({
  children,
  title,
}: ModalComponentProps) {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    router.back();
  };

  return (
    <>
      <Modal
        isOpen={open}
        onClose={handleClose}
        isDismissable={true}
        backdrop="blur"
        size="5xl"
        className="backdrop-blur-sm bg-identity/35 border border-identity"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
          <Separator className="bg-identity/50" />
          <ModalBody>{children}</ModalBody>
          <Separator className="bg-identity/50" />
          <ModalFooter>
            <Button color="danger" variant="light" onPress={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
