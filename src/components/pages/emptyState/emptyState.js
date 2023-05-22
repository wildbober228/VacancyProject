import React, {useEffect} from 'react';
import './emptyState.css';
import {Button, Image, Text} from "@mantine/core";
import image from './assets/logo.png'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchAllVacancies} from "../../../store/reducers/vacanciesReducer";

const EmptyState = ({fromFavorite}) => {

    const dispatch = useDispatch()
    useEffect(() => {
        fetchAllVacancies(dispatch)
    }, [])

    return (
        <div style={{minHeight: fromFavorite ? "100%" : "100vh"}} className="body-v">
            <div className="nothingFoundContainer">
                <div>
                    <Image width={240} height={230} src={image} alt="Not found vacancy image"/>
                </div>
                <Text className="text"> Упс, здесь еще ничего нет!</Text>
                <Link to="/">
                    <Button className="searchButton" variant="light">
                        Поиск Вакансий
                    </Button>
                </Link>
            </div>

        </div>
    );
};

export default EmptyState;
