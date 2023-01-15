import React from 'react';
import Header from "../components/UI/Header/Header";
import Navigation from "../components/UI/Navigation/Navigation";
import MainContent from "../components/UI/WebContentWrapper/MainContent";
import Footer from "../components/UI/Footer/Footer";
import Banner from "../components/UI/Banner/Banner";
import { VehicleReq } from "types";

function Home() {
    const foobar: VehicleReq = {
        brand: 'xxx',
        model: 'xxx',
        period: "xxx",
        cost: 12,
        discipline: "xxx",
        country: '',
    }
    return (
        <>
            <Header>
                <Navigation />
                <Banner />
            </Header>
            <MainContent>

            </MainContent>
            <Footer>
                <h1>{foobar.brand}</h1>
            </Footer>
        </>

    );
}

export default Home;