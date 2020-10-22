import React from 'react'
import AuthProvider from './AuthProvider'
import ClimetricsProvider from './ClimetricsProvider'

const AppProvider = ({children}) => {
    return (
        <AuthProvider>
            <ClimetricsProvider>
                {children}
            </ClimetricsProvider>
        </AuthProvider>
    )
}

export default AppProvider
