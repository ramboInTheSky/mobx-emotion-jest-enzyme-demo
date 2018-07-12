import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

import { Artist } from './Artist'
import { sortByArtists } from '../helpers'

export class ResultView extends PureComponent {

    render() {
        const { data: { results } } = this.props

        const sortedResults = results && results.length
            ? sortByArtists(results)
            : {}

        const artists = Object.keys(sortedResults)

        return (
            <Fragment>
                {
                    artists && artists.length ?
                        artists.map( artist => (
                            <Artist key={artist} data={sortedResults[artist]} name={artist}/>
                        ))
                        : null
                }
            </Fragment>
        )
    }
}

ResultView.propTypes = {
    data: PropTypes.object.isRequired
}