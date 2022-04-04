import React, { FunctionComponent } from 'react'


type headerProps = {
    title?: string
    message?: string
    login?: string
}

const AppHeader: React.FC<headerProps> = ({title, message, login}) => {
    return (
        <header>
            <h2>chaselonas.dev</h2>
            <h2>Welcome to my header element</h2>
            <h2>login stuff</h2>
        </header>
    )
}

export default AppHeader