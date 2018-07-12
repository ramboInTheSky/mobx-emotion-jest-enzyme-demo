import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

import { Album } from './Album'
import { sortByAlbum } from '../helpers'

const ArtistComponent = styled('div')`
    padding-left: 10rem;
    text-align: left;
    width: 100%;
    margin: 1rem;
`
const AlbumsContainer = styled('div')`
   text-align: left;
   margin-left: 2rem;
   border-left: 2px solid #999;
`

const AlbumComponent = styled('div')`
    padding-top: 0.3rem;
    padding-top: 0.3rem;
    &::before { 
        content: "-- ";
        color: #999;
    }
`

export class Artist extends PureComponent {

    render() {
        const { data, name } = this.props

        const sortedResults = data && data.length
            ? sortByAlbum(data)
            : {}

        const albums = Object.keys(sortedResults)

        return (
            <ArtistComponent>
                <span> {name} </span>
                <AlbumsContainer>
                    {
                        albums && albums.length ?
                            albums.map((album, index) =>
                                <AlbumComponent key={album} >
                                    <Album name={album} data={sortedResults[album]} />
                                </AlbumComponent>)
                            : null
                    }
                </AlbumsContainer>
            </ArtistComponent>
        )
    }
}

Artist.propTypes = {
    data: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
}