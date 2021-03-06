import React from 'react'
import {Container, Input, Button, Text} from "./styles/opt.form"

import LogoBtn from "../../../static/images/icons/chevron-right.png"
export default function OptForm({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
} 

OptForm.Input = function OptFormInput({children, ...restProps}){
    return <Input {...restProps} />
}

OptForm.Button = function OptFormButton({children, ...restProps}){
    return (
        <Button>
            {children}
            <img src={LogoBtn} />
        </Button>
    )
}

OptForm.Text = function OptFormText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}