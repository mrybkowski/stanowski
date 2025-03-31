"use client";

import { Download } from "lucide-react";
import Button from "./Button";

export default function ZbierajPodpisy() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/KWKJS_lista-podpisow.pdf";
    link.download = "KWKJS_lista-podpisow.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Button onClick={handleDownload}>
      zbieraj podpisy
      <Download />
    </Button>
  );
}
