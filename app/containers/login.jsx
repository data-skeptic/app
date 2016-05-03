import { connect } from 'react-redux'
import { getToken } from '../actions/actions'

import Login from '../components/login'

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => {
            dispatch(getToken(username, password))
        }
    }
}

const LoginPage = connect(
    mapStateToProps,
    mapDispatchToProps)(Login)

export default LoginPage
