import {create} from 'zustand';

interface StoreState {
  cache: number;
  addCaching: (value: number) => void;
  removeAllCache: () => void;
}

const useStore = create<StoreState>(set => ({
  cache: 0,
  addCaching: value => set(state => ({cache: state.cache + value})),
  removeAllCache: () => set({cache: 0}),
}));

export {useStore};
