import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import type { LastSearchStoreType } from './useLastSearch.types'

export const useLastSearch = create<LastSearchStoreType>()(
    persist(
        (set) => ({
            addShownMovies: (movies) => {
                set({ shownMovies: [...movies] })
            },
            pageParam: 1,
            scrollPosition: 0,
            searchValue: '',
            setPageParam: (page) => {
                set({ pageParam: page })
            },
            setScrollPosition: (position) => {
                set({ scrollPosition: position })
            },
            setSearchValue: (value) => {
                set({ searchValue: value })
            },
            shownMovies: [],
        }),
        {
            name: 'search-storage',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
)

export default useLastSearch
