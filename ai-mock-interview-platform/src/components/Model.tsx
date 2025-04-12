// This is model reuseble components used for saving the model inside which we going to have dialog box

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


interface ModelProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

import React from "react";

export const Model = ({
  title,
  description,
  isOpen,
  onClose,
  children,
}: ModelProps) => {
    const onChange = ( open : boolean) => {
        if(!open){
            onClose();
        }
    }

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="">{children}</div>
      </DialogContent>
    </Dialog>
  );
};
