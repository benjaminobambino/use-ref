import React, { useRef, useState } from "react";

function Counter() {
  const hasClickedButton = useRef(false)

  const [count, setCount] = useState(0)

  function onClick() {
    const newCount = count + 1

    setCount(newCount)

    hasClickedButton.current = true;
  }

  console.log('Has clicked button? ' + hasClickedButton.current)
  console.log(hasClickedButton)

  return (
    <div>
      <p>{count}</p>

      <button type="button" onClick={onClick}>
        Increase
      </button>
    </div>
  );
}

export default Counter