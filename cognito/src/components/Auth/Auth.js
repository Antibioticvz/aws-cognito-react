import React from 'react'
import PropTypes from 'prop-types'

import { config } from 'aws-cognito-redux-saga'

class Auth extends React.Component {
  static propTypes = {
    getUser: PropTypes.func
  }

  componentWillMount() {
    config.config.set({
      region: 'us-west-1',
      IdentityPoolId: '',
      UserPoolId: 'us-east-1_GZh9L6P07',
      ClientId: 's6l3at6tbjo8366ks55qbgj0g'
    })

    this.props.getUser()
  }

  render() {
    return null
  }
}

export default Auth
