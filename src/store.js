import { create } from 'zustand'

const useStore = create((set) => ({
    count: 1,
    input: 0,
    inc: () => set((state) => ({ count: state.count + 1 })),
    dec: () => set((state) => ({ count: state.count - 1 })),
    incByInput : () => set((state) => ({ count: state.count + +state.input })),
    setInput : (inputValue) => set(({input : inputValue}))
  }))

export {
    useStore
}