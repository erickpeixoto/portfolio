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
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={handleClose}>
              Close
            </Button>

            <Button color="primary" onPress={() => console.log("Action")}>
              Action
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
