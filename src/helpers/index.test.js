import {
    sortByAlbum,
    sortByArtists
} from './index'

const mockedValue = [{
    "artistName": "Led Zeppelin",
    "trackName": "Immigrant Song",
    "collectionName": "Physical Graffiti (Remastered)"
}]

describe('helpers Tests suite', () => {

    it('Should Reduce the array to an object', () => {
        expect(sortByArtists(mockedValue))
            .toEqual({
                'Led Zeppelin': [{
                    "artistName": "Led Zeppelin",
                    "trackName": "Immigrant Song",
                    "collectionName": "Physical Graffiti (Remastered)"
                }]
            })
    })

    it('Should Reduce the array to an object', () => {
        expect(sortByAlbum(mockedValue))
            .toEqual({
                'Physical Graffiti (Remastered)': [{
                    "artistName": "Led Zeppelin",
                    "trackName": "Immigrant Song",
                    "collectionName": "Physical Graffiti (Remastered)"
                }]
            })
    })

})