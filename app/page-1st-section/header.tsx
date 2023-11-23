import { ReactNode } from "react";

export const Header = ({
  children,
  href,
}: {
  children: ReactNode;
  href?: string;
}) => {
  return (
    <a
      href={href || "/"}
      style={{ color: "white", textDecorationColor: "gray" }}
    >
      {children}
    </a>
  );
};
