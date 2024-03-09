import { create } from 'zustand'

const useStore = create((set) => ({
sT:'',
ss:(st)=>set({sT:st}),
}))
export default useStore