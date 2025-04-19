export type FavoritesStoreType = {
    favorites: string[]
    addFavorite: (id: string) => void
    removeFavorite: (id: string) => void
    isFavorite: (id: string) => boolean
}
