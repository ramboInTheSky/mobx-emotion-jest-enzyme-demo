import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

const SongsContainer = styled('div')`
   text-align: left;
   margin-left: 2rem;
`
const SongComponent = styled('div')`
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    &::before { 
        content: "┗";
        color: #999;
    }
`

export const Album = ({ data, name }) => (
    <Fragment>
        <span>{name} </span>
        <SongsContainer>
            {
                data && data.length ?
                    data.map((song) => <SongComponent key={song.trackId}>
                        <a href={song.previewUrl} target="_blank">{song.trackName}</a>
                    </SongComponent>
                    )
                    : null
            }
        </SongsContainer>
    </Fragment>
)

Album.propTypes = {
    data: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
}