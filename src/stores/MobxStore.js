import {
    observable,
    action
} from 'mobx'
import {
    FetchLib
} from './FetchLib'


export const mobxStore = observable({
    //initial state
    data: {},
    count: 0,
    lastQuery: '',
    isLoading: false,
    isLoaded: false
})

export const getData = action(
    query => {
        mobxStore.lastQuery = query
        FetchLib.fetchData(query).then(data => {
            mobxStore.data = data
            mobxStore.count = data.resultCount
        })
    })

