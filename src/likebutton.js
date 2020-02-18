import React, { useState } from "react"

function Like(props) {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("likes")
  function updateCount(e) {
    e.preventDefault()
    setCount(count + 1)

    if (count === 0) {
      setText("like")
    } else {
      setText("likes")
    }
  }
  console.log(count)
  return (
    <div className="Like">
      <button onClick={updateCount}>
        {count} {text}
      </button>
    </div>
  )
}

export default Like
