import React from 'react';
import VehicleListItem from "./VehicleListItem";


function VehiclesList() {

    const vechicles = [
        {
            id: 0,
            brand: 'Chevrolet',
            model: 'Camaro ZL1',
            date: '2010',
            cost: 42312312,
        },
        {
            id: 1,
            brand: 'Opel',
            model: 'Vectra',
            date: '2003',
            cost: 42312312,
        },
        {
            id: 2,
            brand: 'Lamborghini',
            model: 'Gallardo',
            date: '2011',
            cost: 42312312,
        },
        {
            id: 3,
            brand: 'Bugatti',
            model: 'Divo',
            date: '2015',
            cost: 42312312,
        },
    ]


    return (
        <section className='all-vehicles'>
            <ul>
                {vechicles.map((el)=>{
                    return(
                        <VehicleListItem
                            key={el.id}
                            brand={el.brand}
                            model={el.model}
                            date={el.date}
                            cost={el.cost}
                        />
                        )
                })}
            </ul>
        </section>
    );
}

export default VehiclesList;