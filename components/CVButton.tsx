"use client"

import { FiDownload } from "react-icons/fi";
import { Button } from "./ui/button";

const CVButton = () => {
  return (
    <Button
    variant="outline"
    size="lg"
    className="uppercase flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-primary"
    onClick={() => {
    const link = document.createElement("a");
    link.href = "/assets/Sushil_Resume.pdf";
    link.download = "Sushil's_Resume.pdf";
    link.click();
    }}
    >
    <span>Download CV</span>
    <FiDownload className="text-xl" />
    </Button>
    
  )
}

export default CVButton