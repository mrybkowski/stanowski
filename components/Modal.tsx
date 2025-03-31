"use client";

import { useEffect } from "react";
import { useModal } from "@/providers/ModalContext";
import { X } from "lucide-react";
import ZeroKonkretow from "./ZeroKonkretow";

export default function Modal() {
  const { isModalOpen, modalContent, modalTitle, closeModal } = useModal();

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div
      className="modal fixed inset-0 flex items-center justify-center bg-accent-foreground/90"
      onClick={closeModal}
    >
      <div
        className="container bg-white rounded-lg shadow-lg max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 flex justify-between items-center bg-zinc-100">
          <h2 className="text-lg font-semibold">{modalTitle}</h2>
          <button
            className="text-zinc-400 hover:text-zinc-600 hover:cursor-pointer"
            onClick={closeModal}
          >
            <X size={32} />
          </button>
        </div>

        <div className="p-10 overflow-y-auto max-h-[70vh] leading-relaxed">
          {modalContent}
        </div>

        <div className="p-6 flex justify-between items-center bg-zinc-100">
          <ZeroKonkretow />
        </div>
      </div>
    </div>
  );
}
