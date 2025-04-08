import React from "react";

interface SaveModelProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const SaveModel = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}: SaveModelProps) => {
  return <div>SaveModel</div>;
};
