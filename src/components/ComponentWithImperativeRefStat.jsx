import React, { useEffect, useRef } from "react";

export default function ComponentWithImperativeRefState() {
  const ref = useRef();

  
  useEffect(() => {
    ref.current.textContent = 0;
    console.log(ref.current.textContent)
  }, []);
  
  function handleClick() {
    ref.current.textContent = Number(ref.current.textContent) + 1;
  }

  return (
    <div>
      <div>
        <span ref={ref} />
      </div>

      <button type="button" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
}