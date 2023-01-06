import React from 'react';
import Header from "../components/UI/Header/Header";
import Navigation from "../components/UI/Navigation/Navigation";
import Footer from "../components/UI/Footer/Footer";
import MainContent from "../components/UI/WebContentWrapper/MainContent";
import VehiclesList from "../components/List-vechicles/VehiclesList";

function AllVehicles() {
    return (
        <>
            <Header>
                <Navigation />
            </Header>
            <MainContent>
                <VehiclesList />
            </MainContent>
            <Footer />
        </>
    );
}

export default AllVehicles;