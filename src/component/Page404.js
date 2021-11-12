import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Page404() {
    
    return (
        <div>

            <h1>Page not found</h1>
            <NavLink to="/">Go back Home</NavLink>
        </div>
    )
}
