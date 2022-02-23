import React, { useEffect, useRef, useState } from "react";

export default function ComponentWithRefRead() {
  const [text, setText] = useState('Some text ...');

  function handleOnChange(event) {
    setText(event.target.value);
  }

  const ref = useRef();

  useEffect(() => {
    const { width } = ref.current.getBoundingClientRect();

    document.title = `Width: ${width}`;
  }, [text]);

  console.log(ref.current)

  return (
    <div>
      <input type="text" value={text} onChange={handleOnChange} />
      <div>
        <span ref={ref}>{text}</span>
      </div>
    </div>
  );
}