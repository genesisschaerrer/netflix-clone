import React from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'

import logo from "../../static/images/misc/logo.svg"

export function HeaderContainer({children}){
    return (
        <Header>
            <Header.Frame>
            <Header.Logo to={ROUTES.HOME} src="../../static/images/misc/logo.svg" alt="netflix"/>
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
        </Header>
    )
}