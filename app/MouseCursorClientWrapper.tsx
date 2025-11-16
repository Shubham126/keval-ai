"use client";

import dynamic from "next/dynamic";

const MouseCursor = dynamic(() => import("@/components/MouseCursor"), {
  ssr: false,
  loading: () => null,
});

export default function MouseCursorClientWrapper() {
  return <MouseCursor />;
}
