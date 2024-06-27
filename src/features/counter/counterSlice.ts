import { StateCreator } from 'zustand'
import { AppState } from '~/app/store'
import { fetchCount } from './counterAPI'

export interface CounterSlice {
  count: number
  countStatus: 'idle' | 'loading' | 'failed'
  increment: () => void
  decrement: () => void
  incrementByAmount: (amount: number) => void
  incrementAsync: (amount: number) => void
  incrementIfOdd: (amount: number) => void
}

export const counterSlice: StateCreator<AppState, [], [], CounterSlice> = (
  set,
  get,
) => ({
  // state
  count: 0,
  countStatus: 'idle',

  // actions
  increment: () => set((prev) => ({ count: prev.count + 1 })),
  decrement: () => set((prev) => ({ count: prev.count - 1 })),
  incrementByAmount: (amount) =>
    set((prev) => ({ count: prev.count + amount })),
  incrementAsync: async (amount) => {
    set({ countStatus: 'loading' })
    try {
      const response = await fetchCount(amount)
      set((prev) => ({
        countStatus: 'idle',
        count: prev.count + response.data,
      }))
    } catch {
      set({ countStatus: 'failed' })
    }
  },
  incrementIfOdd: (amount) => {
    if (get().count % 2 === 1) {
      get().incrementByAmount(amount)
    }
  },
})
