import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementBy } from '../store/slices/counterSlice'

export const Counter = () => {
  const dispatch = useDispatch()
  const value = useSelector((state) => state.counter.value)
  const [amount, setAmount] = useState(0)

  return (
    <div>
      <h2>Counter: {value}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <div style={{ marginTop: '10px' }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(incrementBy(amount))}>
          Increment By Value
        </button>
      </div>
    </div>
  )
}

