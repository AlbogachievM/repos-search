import React from 'react';
import s from './styles.module.sass'
type Props = {
    children: React.ReactNode
}
export const Container = ({children}: Props) => {
    return (
        <div className={s.container}>
            {children}
        </div>
    );
};

