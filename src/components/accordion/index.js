import React, {useState} from "react"
import { Container, Body, Title, Header, Inner, Item, Frame } from "../accordion/styles/accordion"

export default function Accordion({children, ...restProps}){ 
    return(
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Title = function AccordionTittle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Accordion.Frame = function AccordionFrame({children, ...restProps}){
    return <Frame {...restProps}>{children}</Frame>
}

Accordion.Item = function AccordionItem({children, ...restProps}){
    return <Item {...restProps}>{children}</Item>
}

Accordion.Header = function AccordionHeader({children, ...restProps}){
    return <Header {...restProps}>{children}</Header>
}

Accordion.Body = function AccordionBody({children, ...restProps}){
    return <Body {...restProps}>{children}</Body>
}