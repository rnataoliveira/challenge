// import { connect } from 'react-redux'
// import React, { Component } from 'react'
// import TodoList from './TodoList'

// import { importStars } from './actions'
// import Repositories from './Repositories';
// import SetTags from './SetTags';


//         // const repository = repositories.stars.filter(star => star.name === this.props.repo)[0]
//         // const repositories = JSON.parse(localStorage.getItem(this.props.username))


// const getImportStars = (stars, filter) => {
//   switch (filter) {
//     case 'IMPORT_STARS':
//       return stars.filter(star => star.name === this.props.repo)[0]
//     default:
//       throw new Error('Unknown filter: ' + filter)
//   }
// }

// const mapStateToProps = (state) => ({
//   stars: getImportStars(state.stars, state.visibilityFilter)
// })

// const mapDispatchToProps = {
//   handleImport: importStar
// }

// const starsFilter = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SetTags)

// export default starsFilter
// connect(mapStateToProps, {fetchPostsWithRedux})(App);