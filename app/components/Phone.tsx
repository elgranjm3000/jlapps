import type { ReactNode } from "react";

export function Phone({ children }: { children: ReactNode }) {
  return (
    <div className="phone">
      <div className="phone-screen">
        <div className="notch" />
        <div className="scr">{children}</div>
      </div>
    </div>
  );
}
