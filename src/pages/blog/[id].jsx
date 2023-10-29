import React from "react";
import { Welcome } from "components/Welcome/Welcome";
import { ColorSchemeToggle } from "components/ColorSchemeToggle/ColorSchemeToggle";

export default function Page({ params }) {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
