import React, { useEffect, useRef } from "react";

export default function ComponentWithDomApi({ label, value, isFocus }) {
  const ref = useRef(); // (1)

  useEffect(() => {
    if (isFocus) {
      ref.current.focus(); // (3)
    }
  }, [isFocus]);

  console.log(ref.current)

  return (
    <label>
      {/* (2) */}
      {label}: <input type="text" value={value} ref={ref} onChange={() => {}} />
    </label>
  );
}