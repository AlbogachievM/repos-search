import React from 'react';
import {SearchBar} from "../searchBar";
import s from './styles.module.sass'
import {Container} from "../container";

export const Header = () => {
    return (
        <header className={s.header}>
            <Container>
                <SearchBar/>
            </Container>
        </header>
    );
};

