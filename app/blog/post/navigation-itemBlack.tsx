import { ReactNode } from "react";

export const NavigationItemBlack = ({
  children,
  href,
}: {
  children: ReactNode;
  href?: string;
}) => {
  return (
    <a
      href={href || "/"}
      style={{ color: "#000000", textDecorationColor: "gray" }}
    >
      {children}
    </a>
  );
};
