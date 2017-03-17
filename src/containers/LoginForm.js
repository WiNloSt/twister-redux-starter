import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { login } from '../actions'

const LoginInput = props => (
  <div className='form-group'>
    <input {...props.input} {...props} />
  </div>
)

class LoginForm extends React.Component {
  static propTypes = {
    handleSubmit: React.PropTypes.func.isRequired,
    login: React.PropTypes.func.isRequired,
    redirect: React.PropTypes.func.isRequired,
    token: React.PropTypes.string
  }

  static defaultProps = {
    token: ''
  }

  submitLogin = ({ username, password }) => {
    this.props.login(username, password)
  }

  componentWillMount() {
    if (this.props.token) {
      this.props.redirect('/')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      this.props.redirect('/')
    }
  }

  render() {
    return (
      <div className='login-form'>
        <form onSubmit={this.props.handleSubmit(this.submitLogin)}>
          <div className='form-group'>
            <a className='btn btn-primary form-control' href='#'>Log in with Facebook</a>
          </div>
          <div className='login-label'>
            ------------------------ OR ------------------------
            <br /><br />
            Log in with your username
          </div>
          <Field name='username' component={LoginInput} type='text' className='form-control' placeholder='Username' />
          <Field name='password' component={LoginInput} type='password' className='form-control' placeholder='Password' />
          <div className='form-group text-right'>
            <button className='btn btn-default' href='#'>Log in</button>
          </div>
        </form>
      </div>
    )
  }
}

const EnhancedReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const mapState = state => ({
  token: state.auth.token
})

const mapDispatch = {
  login,
  redirect: push
}
export default connect(mapState, mapDispatch)(EnhancedReduxForm)
