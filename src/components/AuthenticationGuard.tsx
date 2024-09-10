import { withAuthenticationRequired } from '@auth0/auth0-react';
import React, { ComponentType } from 'react'

// we set up the interface for the type of props we are taking in
//  ComponentType<object> - grabbed from withAuthenticationRequired's documentation
interface AuthenticationProps {
    component: ComponentType<object>;
}

// Our AuthenticaionGuard component takes in a component as props
const AuthenticationGuard = ({component}: AuthenticationProps) => {
    // ProtectedComponent makes use of withAuthenticationRequired - auth0's form of route protection
    // if we are logged in, render the component passed in as props
    // if not, redirect to login page
    const ProtectedComponent = withAuthenticationRequired(component, {
        onRedirecting: () => <>Redirecting!</>
    })
  return (
    <ProtectedComponent />
  )
}

export default AuthenticationGuard