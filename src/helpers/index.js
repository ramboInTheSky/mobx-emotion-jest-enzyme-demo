export const sortByAlbum = (songs) => {
        return songs.reduce((acc, current) => {
            const collectionName = current.collectionName
            acc[collectionName]
                ? acc[collectionName] = acc[collectionName].concat(current)
                : acc[collectionName] = [current]
            return acc
        }, {})
}
    
export const sortByArtists = (songs) => {
        return songs.reduce((acc, current) => {
            const artistName = current.artistName
            acc[artistName]
                ? acc[artistName] = acc[artistName].concat(current)
                : acc[artistName] = [current]
            return acc
        }, {})
    }