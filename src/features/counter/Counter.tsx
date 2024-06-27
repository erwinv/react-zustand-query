import { useState } from 'react'

import { useStore } from '~/app/store'
import styles from './Counter.module.css'

export const Counter = () => {
  const count = useStore((state) => state.count)
  const status = useStore((state) => state.countStatus)
  const {
    increment,
    decrement,
    incrementByAmount,
    incrementIfOdd,
    incrementAsync,
  } = useStore.getState()

  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={decrement}
        >
          -
        </button>
        <span aria-label="Count" className={styles.value}>
          {count}
        </span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={increment}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          type="number"
          onChange={(e) => {
            setIncrementAmount(e.target.value)
          }}
        />
        <button
          className={styles.button}
          onClick={() => incrementByAmount(incrementValue)}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          disabled={status !== 'idle'}
          onClick={() => incrementAsync(incrementValue)}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => {
            incrementIfOdd(incrementValue)
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  )
}
