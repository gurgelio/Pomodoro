import { HandPalm, Play } from "phosphor-react";
import { useContext } from "react";
import { cycleContext } from "../../../contexts/cycleContext";

interface SubmitButtonProps {
  formId: string;
}

export function SubmitButton({ formId }: SubmitButtonProps) {
  const { cycle, interruptCycle } = useContext(cycleContext);

  if (cycle != null) {
    return (
      <button
        type="button"
        className="max-w-xl w-full p-4 rounded-lg flex items-center justify-center cursor-pointer gap-2 bg-amber-700 hover:bg-amber-800 transition-colors"
        onClick={interruptCycle}
      >
        <HandPalm size={24} /> Interromper
      </button>
    );
  }

  return (
    <button
      type="submit"
      form={formId}
      className="max-w-xl w-full p-4 rounded-lg flex items-center justify-center cursor-pointer gap-2 bg-emerald-600 hover:bg-emerald-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
    >
      <Play size={24} /> Começar
    </button>
  );
}
