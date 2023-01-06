import React from 'react';
import Header from "../components/UI/Header/Header";
import Navigation from "../components/UI/Navigation/Navigation";
import MainContent from "../components/UI/WebContentWrapper/MainContent";
import Footer from "../components/UI/Footer/Footer";

function Home() {
    return (
        <>
            <Header>
                <Navigation></Navigation>
            </Header>
            <MainContent>

            </MainContent>
            <Footer>

            </Footer>
        </>

    );
}

export default Home;