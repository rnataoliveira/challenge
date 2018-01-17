export const fetchStarsHasErrored = errored => ({
    type: 'FETCH_STARS_HAS_ERRORED',
    hasErrored: errored
})

export const fetchStarsIsLoading = loading => ({
    type: 'FETCH_STARS_IS_LOADING',
    isLoading: loading
})

export const fetchStarsSuccess = stars => ({
    type: 'FETCH_STARS_SUCCESS',
    stars
})

export const fetchStars = url => {
    return dispatch => {
        dispatch(fetchStarsIsLoading(true))

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                dispatch(fetchStarsIsLoading(false))

                return response
            })
            .then(response => response.json())
            .then(stars => dispatch(fetchStarsSuccess(stars)))
            .catch(() => dispatch(fetchStarsHasErrored(true)))
            
    }
}

// export const changeRoute = path => ({
//      type: 'CHANGE_ROUTE', 
//      path 
// })

export const setTags = (id, tags) => ({
    type: 'SET_TAGS',
    tags: tags.target.value,
    id
})

export const searchTag = (q) => {
    return {
        type: 'SEARCH_TAG',
        q
    }
}

// Implement
export const saveTags = parametro => {
    return dispatch => {
        // save the tags in the storage??
            
    }
}