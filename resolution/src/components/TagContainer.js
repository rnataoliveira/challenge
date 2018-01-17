import { connect } from 'react-redux'
import { setTags } from '../actions'
import UserImport from './UserImport'

const mapStateToProps = state => ({
    tags ,
    id: state.id,
    q: state.q
})

// Pass the right values
const mapDispatchToProps = dispatch => ({
    saveTags: url => dispatch(saveTags(parametro))
})

export default connect(mapStateToProps, mapDispatchToProps)(setTags)