import * as AuthActionCreator from './auth'
import * as VacancyActionCreator from './vacancy'
import * as VacanciesActionCreator from './vacancies'
import * as FavoriteActionCreator from './favorite'
import * as CataloguesActionCreator from './catalogues'

export default {
    ...AuthActionCreator,
    ...VacancyActionCreator,
    ...VacanciesActionCreator,
    ...FavoriteActionCreator,
    ...CataloguesActionCreator,
}


