import { ReactNode } from "react";

interface BlockProps {
  classes?: string;
  children: ReactNode;
}

export default function Block({ classes = "", children }: BlockProps) {
  return <div className={`px-4 ${classes}`}>{children}</div>;
}
