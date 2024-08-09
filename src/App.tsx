import React from 'react';
import {Header} from "./components/header";
import {useSelector} from "react-redux";
import {selectReposItems} from "./selectors/selectors";
import {Container} from "./components/container";
import {Repositories} from "./components/repositories";

function App() {
    const repos = useSelector(selectReposItems)
    return (
        <div className="App">
            <Header/>
            <Container>
                    {!repos.length ? <h1>Добро</h1> : <Repositories/>}
            </Container>

        </div>
    );
}

export default App;
