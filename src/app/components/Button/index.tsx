import React from "react";

interface buttonProps {
  value: string;
  buttonType: "submit" | "reset" | "button" | undefined;
  primary?: boolean;
  secondary?: boolean;
  autoFocus?: boolean | undefined;
  disabled?: boolean | undefined;
}
export default function Button({
  value,
  buttonType,
  primary,
  secondary,
  autoFocus,
  disabled
}: buttonProps) {
  return (
    <div>
      <button type={buttonType}>{value}</button>
    </div>
  );
}
