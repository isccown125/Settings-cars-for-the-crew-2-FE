import React from 'react';
import Header from "../components/UI/Header/Header";
import Navigation from "../components/UI/Navigation/Navigation";
import MainContent from "../components/UI/WebContentWrapper/MainContent";
import Footer from "../components/UI/Footer/Footer";
import { VehicleReq } from "types";

function Home() {
    const foobar: VehicleReq = {
        brand: 'xxx',
        model: 'xxx',
        period: "xxx",
        cost: 12,
        discipline: "xxx",
    }
    return (
        <>
            <Header>
                <Navigation></Navigation>
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