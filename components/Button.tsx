"use client";

import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "link";
  className?: string;
  onClick?: () => void;
};

const variantClasses = {
  primary:
    "bg-accent text-white hover:bg-accent-foreground w-max px-8 py-4 rounded-4xl font-bold text-balance transition-all duration-400 uppercase hover:cursor-pointer flex gap-2 items-center",
  link: "hover:text-accent px-0 py-0 m-0 w-max rounded-4xl font-bold text-balance transition-all duration-400 uppercase hover:cursor-pointer flex gap-2 items-center",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(variantClasses[variant], className)}
    >
      {children}
    </button>
  );
};

export default Button;
