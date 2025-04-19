import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { FavoritesStoreType } from './useFavoritesStore.types'

export const useFavoritesStore = create<FavoritesStoreType>()(
    persist(
        (set, get) => ({
            addFavorite: (id) => {
                const current = get().favorites
                if (!current.includes(id)) {
                    set({ favorites: [...current, id] })
                }
            },
            favorites: [],
            isFavorite: (id) => {
                return get().favorites.includes(id)
            },
            removeFavorite: (id) => {
                set({ favorites: get().favorites.filter((favId) => favId !== id) })
            },
        }),
        {
            name: 'favorites-storage',
        }
    )
)
