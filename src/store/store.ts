import {create} from 'zustand'
import {produce} from 'immer';
import {testStore} from "./testStore";

interface CountType {
    count: number
    increaseCount: () => void
    object: {
        name: string
        obj1: {
            name: string
            count: number
        }
    }
    increaseObj: () => void
}

const initialState = {
    count: 0,
    object: {
        name: 'object',
        obj1: {
            name: 'obj',
            count: 0
        }
    }
}
const {increaseNumber} = testStore(state => state)
export const useStore = create<CountType>((set) => ({
    ...initialState,
    increaseCount: () => set((state) => (increaseNumber(), {count: state.count + 1})),
    increaseObj: () => set(produce((state) => {
        state.object.obj1.count++
    }))
}))

const inc = useStore.setState((state) => ({count: state.count + 1}))