import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

export class QueryForm extends React.PureComponent {

    //this is not declared as an arrow function because Babel hoists arrows in the constructor and it is not good practice
    //https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1
    _handleChangeQuery(e) {
        const { handleChangeQuery } = this.props
        console.log('changing input')
        const query = e.target.value
        if (handleChangeQuery) {
            console.log('changing input with ', e.target.value)
            handleChangeQuery(query)
        }
    }

    render() {
        const { count } = this.props
        const _handleChangeQuery = this._handleChangeQuery.bind(this)
        return (
            <Fragment>
                <h2> Search for Artist, Song or Album from the iTunes Library </h2>
                <input className="searchInput" type="text" onChange={_handleChangeQuery} placeholder="insert at least 4 chars"/>
                <p> Results: {count} </p>
            </Fragment>
        )
    }
}



QueryForm.propTypes = {
    handleChangeQuery: PropTypes.func,
    count: PropTypes.number
}