export const setTags = (id, tags) => ({
    type: 'SET_TAGS',
    tags,
    id
})

export const importStars = username => ({
    type: 'IMPORT_STARS',
    username
})