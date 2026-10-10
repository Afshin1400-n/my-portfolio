"use client";

import type { ReactElement } from "react";

export default function Year(): ReactElement {
  return <>{new Date().getFullYear()}</>;
}