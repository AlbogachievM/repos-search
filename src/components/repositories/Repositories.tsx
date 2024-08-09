import React from 'react';
import {RepoTable} from "../reposTable";
import {RepoInfo} from "../reposInfo";
import s from './styles.module.sass'

export const Repositories = () => {
    return (
        <main className={s.main}>
            <RepoTable/>
            <RepoInfo/>
        </main>
    );
};

