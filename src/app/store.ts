import { create } from 'zustand'
import { CounterSlice, counterSlice } from '~/features/counter/counterSlice'

export type AppState = CounterSlice

export const useStore = create<AppState>()((...args) => ({
  ...counterSlice(...args),
}))
