import React, {useEffect, useState} from 'react';
import "./favoritesVacancy.css"
import {useSelector} from "react-redux";
import {useActions} from "../../../helpers/hooks/useActions";
import VacanciesList from "../../vacanciesList/vacanciesList";
import Spinner from "../../Spinner/spinner";
import {getFromLocalStore, LOCAL_STORAGE_KEY_VACANCY} from "../../../helpers/localStoreHelper";
import EmptyState from "../emptyState/emptyState";

const FavoritesVacancy = () => {
    const {favoritesId, loading} = useSelector(state => state.favorite)
    const {favoritesData, loadingData, errorData} = useSelector(state => state.favoriteData)
    const {fetchFavoriteVacancies, addAllVacanciesToFavoriteList} = useActions()
    const [emptyState, setEmptyState] = useState(false)

    useEffect(() => {
        addAllVacanciesToFavoriteList(getFromLocalStore(LOCAL_STORAGE_KEY_VACANCY))

    }, [])

    useEffect(() => {

        fetchFavoriteVacancies(favoritesId)
    }, [favoritesId])

    const renderListIsEmpty = () => {
        return favoritesId.length === 0;
    }

    return (
        <div className="favorite-container">
            {loading === false &&
            <div>
                {loadingData === false
                    ?
                    <div>
                        {(emptyState === false && favoritesData?.objects?.length > 0) ?
                            <VacanciesList vacancies={favoritesData?.objects} itemsPerPage={4}/> :
                            <EmptyState
                                fromFavorite={true}
                                />}
                    </div>
                    : <Spinner/>
                }
            </div>

            }
        </div>
    );
};

export default FavoritesVacancy;
