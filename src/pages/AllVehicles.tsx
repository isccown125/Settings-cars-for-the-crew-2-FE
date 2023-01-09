import React from 'react';
import Header from "../components/UI/Header/Header";
import Navigation from "../components/UI/Navigation/Navigation";
import Footer from "../components/UI/Footer/Footer";
import MainContent from "../components/UI/WebContentWrapper/MainContent";
import VehiclesList from "../components/ListVechicles/VehiclesList";
import Navbar from "../components/UI/Navbar/Navbar";

function AllVehicles() {
    return (
        <>
            <Header>
                <Navigation />
            </Header>
            <MainContent>
                <Navbar />
                <VehiclesList />
            </MainContent>
            <Footer />
        </>
    );
}

export default AllVehicles;