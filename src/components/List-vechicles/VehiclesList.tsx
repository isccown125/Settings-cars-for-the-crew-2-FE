import React from 'react';


function VehiclesList() {

    const vechicles = [
        {
            brand: 'Chevrolet',
            model: 'Camaro ZL1',
            date: '2010',
            

        }
    ]





    return (
        <section className='all-vehicles'>
            <ul>
                {vechicles.map((el)=>{
                    return(
                        <li>

                        </li>
                        )
                })}
            </ul>
        </section>
    );
}

export default VehiclesList;