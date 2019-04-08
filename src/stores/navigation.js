import { Store } from 'laco'

export const NavStore = new Store({ currentIndex: null, scrollIndex: null }, 'Navigation')

export const changeCurrentIndex = currentIndex => NavStore.set(state => ({ currentIndex }), 'Current index changed')
export const changeScrollIndex = scrollIndex => NavStore.set(state => ({ scrollIndex }), 'Scroll to index')
