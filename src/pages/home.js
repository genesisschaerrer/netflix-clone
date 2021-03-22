import React from 'react';

// import Jumbotron from "../components/jumbotron"
import { FaqsContainer } from "../containers/faqs"
import JumbortronContainer from "../containers/jumbotron"
import { FooterContainer} from "../containers/footer"

function Home() {
    return (
        <div>
         <JumbortronContainer />
         <FaqsContainer />
         <FooterContainer />
        </div>
    )
}

export default Home
