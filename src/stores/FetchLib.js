
export class FetchLib {
    static fetchData(query) {
        return fetch('https://itunes.apple.com/search?term=' + formatQuery(query)).then(data => data.json())
    }
}

function formatQuery(query) { 
    if(typeof query === 'string')    
        return query.split(' ').join('+')
    return ''
}
