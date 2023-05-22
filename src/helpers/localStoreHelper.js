
export const LOCAL_STORAGE_KEY_VACANCY = "vacancies"

export const toLocalStore = (data, LOCAL_STORAGE_KEY, addVacancyToFavoriteList, deleteVacancyFromFavoriteList, addAllVacanciesToFavoriteList) => {
    const storedVacancies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (storedVacancies === null || !storedVacancies.includes(data.id)) {
        addVacancyToFavoriteList(data.id)
        if (storedVacancies === null) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([data.id]))
        } else {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...storedVacancies, data.id]))
        }
        addAllVacanciesToFavoriteList(getFromLocalStore(LOCAL_STORAGE_KEY_VACANCY))
    } else {
        deleteVacancyFromFavoriteList(data.id)
        const newVacanciesArray = storedVacancies.filter((favorite) => favorite !== data.id)
        localStorage.clear();
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newVacanciesArray));
        addAllVacanciesToFavoriteList(getFromLocalStore(LOCAL_STORAGE_KEY_VACANCY))
    }
}

export const getFromLocalStore = (LOCAL_STORAGE_KEY) => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
}

