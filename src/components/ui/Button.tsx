import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gradient" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

export function Button({
  variant = "gradient",
  size = "md",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "rounded-lg font-medium transition-all";
  const variants = {
    gradient:
      "bg-gradient-to-r from-sonarex-blue to-sonarex-purple text-white hover:shadow-lg hover:shadow-sonarex-blue/30",
    outline:
      "border border-gray-700 bg-black/50 backdrop-blur-sm text-white hover:bg-black/80",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
}
