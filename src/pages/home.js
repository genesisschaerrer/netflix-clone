import React from 'react';

import { FaqsContainer } from "../containers/faqs"
import JumbortronContainer from "../containers/jumbotron"
import { FooterContainer} from "../containers/footer"
import { HeaderContainer} from "../containers/header"

function Home() {
    return (
        <div>
            <HeaderContainer>
                <p>hello</p>
            </HeaderContainer>
            <JumbortronContainer />
            <FaqsContainer />
            <FooterContainer />
        </div>
    )
}

export default Home
