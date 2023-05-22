import React, {useEffect} from 'react';
import "./favoritesVacancy.css"
import {useSelector} from "react-redux";
import {useActions} from "../../../helpers/hooks/useActions";
import VacanciesList from "../../vacanciesList/vacanciesList";
import {Navigate} from "react-router";

const FavoritesVacancy = () => {
    const {favoritesId, loading} = useSelector(state => state.favorite)
    const {favoritesData, loadingData, errorData} = useSelector(state => state.favoriteData)
    const {fetchFavoriteVacancies} = useActions()


    useEffect(() => {
        fetchFavoriteVacancies(favoritesId)
    }, [])

    useEffect(() => {
        fetchFavoriteVacancies(favoritesId)
    }, [favoritesId, loading])

    const renderListIsEmpty = () => {
        return favoritesId.length === 0;
    }

    return (
        <div className="favorite-container">
            {loading === false &&
            <div>
                {renderListIsEmpty() === false
                    ?
                    <div>
                        {loadingData === false ?
                            <VacanciesList vacancies={favoritesData?.objects} itemsPerPage={4}/> :
                            <div>Spinner</div>}
                    </div>
                    : <Navigate to="/empty"/>
                }
            </div>

            }
        </div>
    );
};

export default FavoritesVacancy;
