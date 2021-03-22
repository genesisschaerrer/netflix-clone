import React, {useState, useContext, createContext} from "react"
import { Container, Body, Title, Header, Inner, Item, Frame } from "../accordion/styles/accordion"

import imageClose from "../../../static/images/icons/close-slim.png"
import imageOpen from "../../../static/images/icons/add.png"

const ToggleContext = createContext()

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
    const [toggleShow, setToggleShow] = useState(false)

    return(
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Header = function AccordionHeader({children, ...restProps}){
    const {toggleShow, setToggleShow} = useContext(ToggleContext)

    return <Header 
            onClick={() => setToggleShow(!toggleShow)}
            {...restProps}>
                {children}
                {toggleShow? <img src={imageClose} alt="close" />: <img src={imageOpen} alt="open" />}
            </Header>
}

Accordion.Body = function AccordionBody({children, ...restProps}){
    const {toggleShow } = useContext(ToggleContext)
    return (toggleShow? <Body {...restProps}>{children}</Body>: null)
}