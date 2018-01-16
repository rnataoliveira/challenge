import { connect } from 'react-redux'
import { fetchStars } from '../actions'
import UserImport from './UserImport'

const mapStateToProps = state => ({
    stars: state.stars,
    hasErrored: state.starsHasErrored,
    isLoading: state.starsIsLoading
})

const mapDispatchToProps = dispatch => ({
    fetchStars: url => dispatch(fetchStars(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserImport)