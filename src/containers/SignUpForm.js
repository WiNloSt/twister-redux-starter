import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { signUp } from '../actions'

class SignUpForm extends React.Component {
  onSubmit = ({
    username,
    firstName,
    lastName,
    email,
    password
  }) => {
    this.props.signUp({
      username,
      name: `${firstName} ${lastName}`,
      email,
      password
    })
  }

  render() {
    return (
      <div className='signup-form'>
        <div className='logo text-center'>Sign up</div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className='form-group'>
            <Field name='username' component='input' type='text' className='form-control' placeholder='Username' />
          </div>
          <div className='form-group'>
            <Field name='firstName' component='input' type='text' className='form-control' placeholder='Firstname' />
          </div>
          <div className='form-group'>
            <Field name='lastName' component='input' type='text' className='form-control' placeholder='Lastname' />
          </div>
          <div className='form-group'>
            <Field name='email' component='input' type='email' className='form-control' placeholder='youremail@email.com' />
          </div>
          <div className='form-group'>
            <Field name='password' component='input' type='password' className='form-control' placeholder='Password' />
          </div>
          <div className='form-group text-right'>
            <button className='btn btn-primary'>Sign up</button>
          </div>
        </form>
      </div>
    )
  }
}

const EnhancedForm = reduxForm({
  form: 'signUp'
})(SignUpForm)

const mapDispatch = {
  signUp
}

export default connect(null, mapDispatch)(EnhancedForm)
