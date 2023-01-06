import React from 'react';
import styles from './VehicleListItem.module.css';
import currencyImage from '../../assets/images/currency/the-crew-2-curenncy-bucks-16x16.png'

type VehicleListItemProps = {
    brand: string,
    model: string,
    date: string,
    cost: number,
    className?: string,
}


const VehicleListItem:React.FC<VehicleListItemProps> = ({cost, brand, model, date, className})=>{
    return (
        <li className={''} >
            <div className={styles.description}>
                <div className={styles['full-name']}>
                    <p>{brand} {model}</p>
                </div>
                <div className={styles['car-informations']}>
                    <p>period {date}  </p>
                    <p><span className={styles.group}>{cost}<img src={currencyImage} alt="game currency"/></span></p>
                </div>
            </div>
        </li>
    );
}

export default VehicleListItem;