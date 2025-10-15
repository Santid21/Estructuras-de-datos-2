import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { push, pop, clear } from '../store/slices/stackSlice'

export const Stack = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const stack = useSelector((state) => state.stack.items)

  return (
    <div>
      <h2>Stack: [{stack.join(', ')}]</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Value to push"
      />
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => dispatch(push(value))}>Push</button>
        <button onClick={() => dispatch(pop())}>Pop</button>
        <button onClick={() => dispatch(clear())}>Clear</button>
      </div>
    </div>
  )
}
