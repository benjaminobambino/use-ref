import React, { useEffect, useRef, useState } from "react";

export default function ComponentWithRefInstanceVariable() {
  const [count, setCount] = useState(0);

  function onClick() {
    setCount(count + 1);
  }

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      console.log(
        `
          I am a useEffect hook's logic
          which runs for a component's
          re-render.
        `
      );
    }
  });

  return (
    <div>
      <p>{count}</p>

      <button type="button" onClick={onClick}>
        Increase
      </button>

      {/*
        Only works because setCount triggers a re-render.
        Just changing the ref's current value doesn't trigger a re-render.
      */}
      <p>{isFirstRender.current ? 'First render.' : 'Re-render.'}</p>
    </div>
  );
}