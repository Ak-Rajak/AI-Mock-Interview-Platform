// This is model reuseble components used for saving the model inside which we going to have dialog box

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


interface ModalProps {
    title : string,
    description : string,
    isOpen : boolean , 
    isClose : () => void,
    children ?: React.ReactNode
}

import React from 'react'

export const Model = ( {} : ModelProps) => {
  return (
    <div>Model</div>
  )
}


