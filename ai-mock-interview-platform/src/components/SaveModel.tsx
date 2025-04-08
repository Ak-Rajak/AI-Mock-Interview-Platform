import { Model } from "./Model";
import { Button } from "./ui/button";

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
  <Model
    title="Are you sure ?"
    description="Thsi action cannot be undone by you can't edit or re-answer thsi question again!"
    isOpen={isOpen}
    onClose={onClose}
  >
    <div className="pt-6 space-x-2 flex items-center justify-end w-full">
      <Button disabled={loading} variant={"outline"} onClick={onClose}>
        Cancel
      </Button>

      <Button
        disabled={loading}
        className="bg-emerald-600 hover:bg-emerald-800"
        onClick={onConfirm}
      >
        Continue
      </Button>
    </div>
  </Model>;
};
