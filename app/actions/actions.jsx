import fetch from 'isomorphic-fetch'

// Action list

export const START_SEARCH = 'START_SEARCH';
export const END_SEARCH = 'END_SEARCH';

const BASE_URL = 'https://home-sales-data-api-dev.herokuapp.com/api'

function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}


export function propertySearch(searchTerm) {
    return dispatch => {
        dispatch({type: START_SEARCH});
        fetch(`${BASE_URL}/property/?address_contains=${searchTerm}`,
              {
                  method: 'GET',
                  headers: {
                      'Content-Type': 'application/json'
                  }
              })
              .then(checkHttpStatus)
              .then(result => result.json())
              .then(json => dispatch({type: END_SEARCH, data: json}))
    }
}

