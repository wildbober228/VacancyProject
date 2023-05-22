import {combineReducers} from "redux";
import {vacancyInfoReducer} from './vacancyReducer'
import {authReducer} from './authReducer'
import {vacanciesReducer} from "./vacanciesReducer";
import {favoriteReducer} from "./favoriteReducer";
import {favoriteDataReducer} from "./favoriteReducer";
import {cataloguesReducer} from "./cataloguesReducer";

export const rootReducer = combineReducers({
    vacancy: vacancyInfoReducer,
    vacancies: vacanciesReducer,
    auth: authReducer,
    favorite: favoriteReducer,
    favoriteData: favoriteDataReducer,
    catalogues: cataloguesReducer,
})
