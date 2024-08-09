import React from 'react';
import s from './styles.module.sass'
import {useSelector} from "react-redux";
import {selectReposSelected} from "../../selectors/selectors";
export const RepoInfo = () => {
    const repos = useSelector(selectReposSelected)
    return (
        <section className={s.section}>
            {repos ?
                <>
                    <h3>{repos.name}</h3>
                    <p>{repos.description}</p>
                    <p>License: {repos.license?.name || 'None'}</p>
                </>
                : <span>Выберите репозитарий</span>
            }
        </section>
    );
};

