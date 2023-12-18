import React from 'react'

const Button = (props) => {
  // Your button component logic
  return (
    <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none rounded text-xl">{props.title}</button>

  )
};

export default Button;