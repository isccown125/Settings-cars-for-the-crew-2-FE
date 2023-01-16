import React from 'react';
import styles from './VehicleListItem.module.css';
import currencyImage from '../../assets/images/currency/the-crew-2-curenncy-bucks-16x16.png'
import Image from "../UI/Image/Image";
import Footer from "../UI/Footer/Footer";
import Button from "../UI/Buttons/Button";

type VehicleListItemProps = {
    brand: string,
    model: string,
    date: string,
    cost: number,
    discipline: string,
    className?: string,
    carImg: string,
}


const VehicleListItem:React.FC<VehicleListItemProps> = ({discipline,carImg, cost, brand, model, date, className})=>{
    let dynamicBackgroundColor: string = '';
    switch (discipline){
        case 'STREET RACE':
            dynamicBackgroundColor = '#fdd614';
            break;
        case 'OFFROAD':
            dynamicBackgroundColor = '#fb8214';
            break;
        case 'FREESTYLE':
            dynamicBackgroundColor = '#f9165c';
            break;
        case 'POWER RACING':
            dynamicBackgroundColor = '#00d3fc';
            break;

    }
    return (
        <li className={`${styles.style} ${className}`} >
            <header className={styles.description} >
                <div className={styles['full-name']}>
                    <p>{brand} {model}</p>
                </div>
            </header>
            <div className={styles.image} style={{backgroundColor: dynamicBackgroundColor}}>
                <Image src={carImg} alt="" className={styles['car-image']}/>
            </div>
            <Footer className={styles.footer}>
                <div className={styles['car-informations']}>
                    <Button classButtonStyle={'purple'}>MORE INFO</Button>
                    <p className={styles['text-style']}><span className={styles.group}>{cost}
                        <Image className={styles['currency-image']} src={currencyImage} alt="game currency"/>
                    </span>
                    </p>
                </div>
            </Footer>
        </li>
    );
}

export default VehicleListItem;