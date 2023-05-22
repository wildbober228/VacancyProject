import React from 'react';
import {Button, Image, Input, TextInput} from "@mantine/core";
import search_icon from "./assets/SearchIcon.png";
import "./vacancySearchInput.css"

const VacancySearchInput = ({setSearchValue, searchVacancies}) => {
    return (
        <div className="search-input-container">
            <div className="input">
                <Image width={12.57} height={12.57} src={search_icon} alt="Not found search icon"/>
                <input
                    data-elem="search-input"
                    className="input-component"
                    type="text"
                    placeholder="Введите название вакансии"
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
            <div className="search-button">
                <Button data-elem="search-button" onClick={() => searchVacancies()} w="83px" h="32px" radius="8px" bg="#5E96FC">
                    Поиск
                </Button>
            </div>
        </div>
    );
};

export default VacancySearchInput;
