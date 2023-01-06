import React from 'react';
import styles from './MainContent.module.css'

type MainContentProps = {
    children: React.ReactNode,
}

function MainContent(props:MainContentProps) {
    return (
        <main className={styles.page}>
            <div className=''>
                {props.children}
            </div>
        </main>
    );
}

export default MainContent;