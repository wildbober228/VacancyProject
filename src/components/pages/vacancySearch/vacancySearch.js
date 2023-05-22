import React, {useEffect, useState} from 'react';
import './vacancySearch.css';
import {useSelector} from "react-redux";
import {useActions} from "../../../helpers/hooks/useActions";
import VacanciesList from "../../vacanciesList/vacanciesList";
import {Navigate} from "react-router";
import VacancySearchInput from "../../vacancySearchInput/vacancySearchInput";
import VacancyFilter from "../../vacancyFilter/vacancyFilter";
import Spinner from "../../Spinner/spinner";

const VacancySearch = () => {

    const {vacancies, loadingAll, errorAll, page} = useSelector(state => state.vacancies)
    const {token, loadingAuth, errorAuth} = useSelector(state => state.auth)
    const {fetchVacancies, fetchAuthToken} = useActions()
    const itemsPerPage = 20000;

    const [searchValue, setSearchValue] = useState('')
    const [cataloguesValue, setCataloguesValue] = useState([]);
    const [paymentFrom, setPaymentFrom] = useState(0);
    const [paymentTo, setPaymentTo] = useState(0);


    const fetch = () => {
        fetchVacancies(token?.access_token, page, itemsPerPage, paymentFrom, paymentTo, cataloguesValue, searchValue)
    }

    const searchVacancies = () => {
        fetch()
    }

    useEffect(() => {
        fetchAuthToken()
    }, [])

    useEffect(() => {
        if (loadingAuth === false && token) {
            fetch()
        }
    }, [loadingAuth, token])

    if (errorAll) {
        return <Navigate to="/empty"/>
    }

    return (
        <>
            <div className="body-container">
                <div className="filter">
                    <VacancyFilter
                        cataloguesValue={cataloguesValue}
                        setCataloguesValue={setCataloguesValue}
                        paymentFrom={paymentFrom}
                        setPaymentFrom={setPaymentFrom}
                        paymentTo={paymentTo}
                        setPaymentTo={setPaymentTo}
                        searchVacancies={searchVacancies}
                    />
                </div>
                <div className="search">
                    <VacancySearchInput setSearchValue={setSearchValue} searchVacancies={searchVacancies}/>
                </div>
                <div className="listItems">
                    {(loadingAuth === false && loadingAll === false)
                        ? vacancies?.objects?.length !== 0 ?
                            <VacanciesList vacancies={vacancies?.objects} itemsPerPage={4}/> : <Navigate to="/empty"/>
                        : <Spinner/>}
                </div>
            </div>
        </>
    );
};

export default VacancySearch;
