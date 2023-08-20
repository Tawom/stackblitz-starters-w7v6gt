import React from 'react'
import text from "./text"
export default function Card(props){
return (
  <div>
<h1>{props.title}</h1>
<p>{props.details}</p>
  </div>
)
}