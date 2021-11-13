import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ hiddenTitle, click }) => {
    const onClick = click ? click : null

    return (
        <Link to="/">
            <div className="logo" onClick={onClick} >
                    <img src="images/logo.png" className="logo-img" alt="Arcilux" />
                    {
                        !hiddenTitle && (
                            <span className="logo-title">Arcilux</span>
                        )
                    }
            </div>
        </Link>
    )
}

export default Logo
