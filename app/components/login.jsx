import React from 'react'

export default class Login extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }

        this.usernameUpdate = this.usernameUpdate.bind(this)
        this.passwordUpdate = this.passwordUpdate.bind(this)
    }

    usernameUpdate(d) {
        this.setState({ username: d.target.value })
    }

    passwordUpdate(d) {
        this.setState({ password: d.target.value })
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login to continue</h2>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.username}
                            onChange={this.usernameUpdate} placeholder="username" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" value={this.state.password}
                            onChange={this.passwordUpdate} placeholder="password" />
                    </div>
                    <button className="btn btn-primary"
                        onClick={() => this.props.login(this.state.username, this.state.password)}>Login</button>
                </form>
            </div>)
    }
}
