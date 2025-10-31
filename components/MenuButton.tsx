/** @format */

import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import React from "react";

interface MenuButtonProps {
  title: string;
  icon?: LucideIcon;
  action: () => void;
  isActive?: boolean;
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  title,
  icon: Icon,
  action,
  isActive,
}) => {
  return (
    <Button
      variant={isActive ? "secondary" : "ghost"}
      size='sm'
      className='flex items-center gap-1'
      onClick={action}
      title={title}
    >
      {Icon && <Icon size={16} />}
      {title}
    </Button>
  );
};
