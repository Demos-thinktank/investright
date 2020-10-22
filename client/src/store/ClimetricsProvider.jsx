import React, {createContext, useState} from 'react'

export const ClimetricsContext = createContext()

const ClimetricsProvider = ({children}) => {
    const [climetricsFunds, setClimetricsFunds] = useState(null)

    const climetricsData = {climetricsFunds, setClimetricsFunds}

    return (
        <ClimetricsContext.Provider value={climetricsData}>{children}</ClimetricsContext.Provider>
    )
}

export default ClimetricsProvider;
