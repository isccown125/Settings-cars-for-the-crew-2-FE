import React from 'react';
import styles from './VehicleListItem.module.css';
import currencyImage from '../../assets/images/currency/the-crew-2-curenncy-bucks-16x16.png'

type VehicleListItemProps = {
    brand: string,
    model: string,
    date: string,
    cost: number,
    discipline: string,
    className?: string,
    carImg?: string,
}


const VehicleListItem:React.FC<VehicleListItemProps> = ({discipline,carImg, cost, brand, model, date, className})=>{
    let dynamicBackgroundColor: string = '';
    switch (discipline){
        case 'STREET RACING':
            dynamicBackgroundColor = 'yellow';
            break;
        case 'OFFROAD':
            dynamicBackgroundColor = 'orange';
            break;
        case 'FREESTYLE':
            dynamicBackgroundColor = 'pink';
            break;
        case 'PRO RACING':
            dynamicBackgroundColor = 'blue';
            break;

    }
    return (
        <li className={`${styles.style} ${className}`} >
            <header className={styles.description} style={{backgroundColor: dynamicBackgroundColor}}>
                <div className={styles['full-name']}>
                    <p>{brand} {model}</p>
                </div>
                <div className={styles['car-informations']}>
                    <p>period {date}  </p>
                    <p><span className={styles.group}>{cost}<img src={currencyImage} alt="game currency"/></span></p>
                </div>
            </header>
            <div className={styles.image} style={{backgroundColor: dynamicBackgroundColor}}>
                <img src={carImg} alt="" className={styles['car-image']}/>
            </div>
        </li>
    );
}

export default VehicleListItem;