import React from 'react';
import VehicleListItem from "./VehicleListItem";
import styles from './VehiclesList.module.css';
import carImage from '../../assets/images/Cars/buggati-divo-emerald.png'

function VehiclesList() {

    const vechicles = [
        {
            id: 0,
            brand: 'Chevrolet',
            model: 'Camaro ZL1',
            date: '2010',
            cost: 42312312,
            discipline: 'STREET RACE',
            image: '../../assets/images/Cars/Ferrari.png',
        },
        {
            id: 1,
            brand: 'Opel',
            model: 'Vectra',
            date: '2003',
            cost: 42312312,
            discipline: 'STREET RACE',
            image: '../../assets/images/Cars/Ferrari.png',
        },
        {
            id: 2,
            brand: 'Lamborghini',
            model: 'Gallardo',
            date: '2011',
            cost: 42312312,
            discipline: 'POWER RACING',
            image: '/assets/images/Cars/Ferrari.png',
        },
        {
            id: 3,
            brand: 'Bugatti',
            model: 'Divo',
            date: '2015',
            cost: 42312312,
            discipline: 'STREET RACE',
            image: '/assets/images/Cars/Ferrari.png',
        },
        {
            id: 4,
            brand: 'Bugatti',
            model: 'Divo',
            date: '2015',
            cost: 42312312,
            discipline: 'POWER RACING',
            image: '/assets/images/Cars/Ferrari.png',
        },
        {
            id: 5,
            brand: 'Bugatti',
            model: 'Divo',
            date: '2015',
            cost: 42312312,
            discipline: 'FREESTYLE',
            image: '/assets/images/Cars/Ferrari.png',
        },
        {
            id: 6,
            brand: 'Bugatti',
            model: 'Divo',
            date: '2015',
            cost: 42312312,
            discipline: 'STREET RACE',
            image: '/assets/images/Cars/Ferrari.png',
        },
        {
            id: 7,
            brand: 'Bugatti',
            model: 'Divo',
            date: '2015',
            cost: 42312312,
            discipline: 'OFFROAD',
            image: '/assets/images/Cars/Ferrari.png',
        },
    ]


    return (
        <section className={styles.style}>
            <ul>
                {vechicles.map((el)=>{
                    return(
                        <VehicleListItem
                            key={el.id}
                            brand={el.brand}
                            model={el.model}
                            date={el.date}
                            cost={el.cost}
                            discipline={el.discipline}
                            carImg={carImage}
                        />
                        )
                })}
            </ul>
        </section>
    );
}

export default VehiclesList;