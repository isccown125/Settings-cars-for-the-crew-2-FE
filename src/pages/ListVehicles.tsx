import React from 'react';
import Header from "../components/UI/Header/Header";
import Navigation from "../components/UI/Navigation/Navigation";
import Footer from "../components/UI/Footer/Footer";

function ListVehicles() {
    return (
        <>
            <Header>
                <Navigation></Navigation>
            </Header>
            <Footer />
        </>
    );
}

export default ListVehicles;