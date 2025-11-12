import React from "react";

export default function BackdropFX() {
  return (
    <div aria-hidden>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.05] [background:repeating-linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px_4px)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.07] [background:repeating-linear-gradient(180deg,rgba(255,255,255,0.15)_1px,transparent_1px_3px)]" />
    </div>
  );
}
