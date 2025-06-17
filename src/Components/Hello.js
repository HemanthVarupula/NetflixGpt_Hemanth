import React from 'react'
import ReactDOM from "react-dom/client"
const Hello = () => {
  return (
    <div className='text-4xl'>Hello</div>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Hello/>)
export default Hello