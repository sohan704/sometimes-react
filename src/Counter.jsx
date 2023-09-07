import { useState } from "react"

export default function Counter(){
  const [count,setCount] = useState(50);

  const handleAdd = () => {
     const newCount = count + 1;
     setCount(newCount);
  }

  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  }

  return (
    <div style={{
      border: '2px solid pink',
      borderRadius: '30px',
      padding: '20px'
    }}>
      <h3>Default:- {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  )
}