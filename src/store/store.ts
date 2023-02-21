import {create} from "zustand";

type UseStoreType = {
    cardNumber: string
    cardHolders:string
    initial:string
    handlerCardNumber:(e:any)=>void
}

export const useStore = create<UseStoreType>()((set) => ({
    cardNumber: '',
    cardHolders:'',
    initial:'M/V',
    handlerCardNumber:(e)=>set((state)=>({cardNumber:e.target.value}))
}))