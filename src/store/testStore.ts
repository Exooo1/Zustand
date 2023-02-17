import {create} from 'zustand'

type testStore = {
    number: number
    increaseNumber:()=>void
}

export const testStore = create<testStore>((set) => ({
    number: 0,
    increaseNumber: () => set((state) => ({number: state.number + 1}))
}))