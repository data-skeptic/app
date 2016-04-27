import fetch from 'isomorphic-fetch'

// Action list

export const START_SEARCH = 'START_SEARCH';
export const END_SEARCH = 'END_SEARCH';

export const START_LOGIN = 'START_LOGIN';
export const END_LOGIN = 'END_LOGIN';

const BASE_URL = 'https://home-sales-data-api-dev.herokuapp.com/api'

function checkHttpStatus(response) {
    /**
     * Checks the response for an okay response type OK/CREATED etc.
     * @return {response} the resonse if in the 200 class of statuses
     * @throws {Error} an error based on the response body
     */
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}


export function propertySearch(searchTerm) {
    /**
     * Performs a search on the preperty endpoint using a search term.
     * @param {string} searchTerm which is queried against the property address.
     * @return {Promise} a promise which will dispatch an END_SEARCH action when successful
     */
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

export function getToken(username, password) {
    /**
     * Get a new JSON Web Token (JWT) to use for protected requests.
     * @param {string} username the API username
     * @param {string} password the API password
     * @return {Promise} a promise which will dispatch an END_LOGIN action when successful
     */
    return dispatch => {
        dispatch({type: START_LOGIN});
        fetch(`${BASE_URL}/token/auth/`,
              {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: {
                      username: username,
                      password: password
                  }
              })
              .then(checkHttpStatus)
              .then(result => result.json())
              .then(json => dispatch({type: END_LOGIN, data: json}))
    }
}
