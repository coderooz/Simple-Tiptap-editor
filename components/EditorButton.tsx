/** @format
 * @/components/EditorButton.tsx
 */

"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // optional helper if you have it
import { MenuItem } from "@/constants/EditorMenuOptions";

interface EditorButtonProps {
  isActive?: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label?: string;
}

export default function EditorButton({
  isActive,
  onClick,
  icon,
  label,
}: EditorButtonProps) {
  return (
    <Button
      variant={isActive ? "secondary" : "ghost"}
      size='sm'
      className={cn(
        "flex items-center gap-1 px-2 py-1 rounded-md transition cursor-pointer",
        isActive && "bg-muted"
      )}
      onClick={onClick}
      type='button'
    >
      {icon}
      {label && <span className='hidden sm:inline'>{label}</span>}
    </Button>
  );
}
