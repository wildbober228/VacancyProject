import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useActions} from "../../../helpers/hooks/useActions";
import './vacancyInfo.css';
import {Navigate, useParams} from "react-router";
import VacancyCard from "../../vacancyCard/vacancyCard";

const VacancyInfo = () => {
    const {vacancy, loading, error} = useSelector(state => state.vacancy)
    const {fetchVacancyInfo} = useActions()
    const {id} = useParams();

    useEffect(() => {
        fetchVacancyInfo(id)
    }, [])

    if (error) {
        return <Navigate to="/empty"/>
    }

    return (
        <div className="vacancy-container">
            {vacancy && loading === false ? <>
                    <div className="vacancy-card">
                        <VacancyCard
                            vacancy={vacancy}
                            inList={false}
                        />
                    </div>

                    <div className="info-vacancy" dangerouslySetInnerHTML={{__html: vacancy?.vacancyRichText}}>

                    </div>
                </> :
                <div>
                    Spinner
                </div>
            }

        </div>
    );
};

export default VacancyInfo;
