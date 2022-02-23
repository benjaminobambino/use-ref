import React, { useCallback, useEffect, useRef, useState } from "react";

export default function ComponentWithRefRead() {
  const [text, setText] = useState('Some text ...');

  function handleOnChange(event) {
    setText(event.target.value);
  }

  // // useRef version with useEffect -->
  // const ref = useRef();

  // useEffect(() => {
  //   const { width } = ref.current.getBoundingClientRect();

  //   document.title = `Width: ${width}`;
  // }, [text]);

  // callback ref version -->
  const ref = (node) => {
    if (!node) return;

    const { width } = node.getBoundingClientRect();
    console.log(node)

    document.title = `Width: ${width}`;
  }

  // // ref version with useCallback -->
  // const ref = useCallback((node) => {
  //   if (!node) return;

  //   const { width } = node.getBoundingClientRect();
  // //   console.log(node)

  //   document.title = `Width: ${width}`;

  // }, [text])


  return (
    <div>
      <input type="text" value={text} onChange={handleOnChange} />
      <div>
        <span ref={ref}>{text}</span>
      </div>
    </div>
  );
}