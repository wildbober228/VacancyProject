import React, {useEffect} from 'react';
import VacancyInfo from "./components/pages/vacancyInfo/vacancyInfo";
import Empty from "./components/pages/emptyState/emptyState";
import Favorite from "./components/pages/favoritesVacancy/favoritesVacancy";
import Search from "./components/pages/vacancySearch/vacancySearch";
import NavBar from "./components/navBar/navBar";
import {Route, Router, Routes} from "react-router";
import {useActions} from "./helpers/hooks/useActions";
import {getFromLocalStore, LOCAL_STORAGE_KEY_VACANCY} from "./helpers/localStoreHelper";

const App = () => {

    return (
        <React.Fragment>
            <NavBar/>
            <Routes>
                <Route path="/" Component={Search}/>
                <Route path="/vacancy/:id" Component={VacancyInfo}/>
                <Route path="/empty" Component={Empty}/>
                <Route path="/favorite" Component={Favorite}/>
            </Routes>
        </React.Fragment>
    );
};

export default App;
