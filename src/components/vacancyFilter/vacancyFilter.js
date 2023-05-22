import React, {useEffect, useState} from 'react';
import {Button, Image, NumberInput, Select, Text} from "@mantine/core";
import "./vacancyFilter.css"
import drop_filter from "./assets/drop-filter.png";
import {useSelector} from "react-redux";
import {useActions} from "../../helpers/hooks/useActions";


const VacancyFilter = ({   cataloguesValue,
                           setCataloguesValue,
                           paymentFrom, setPaymentFrom,
                           paymentTo,
                           setPaymentTo,
                           searchVacancies
                       }) => {
    const {catalogues, loading, error} = useSelector(state => state.catalogues)
    const {fetchAllCatalogues} = useActions()

    useEffect(() => {
        fetchAllCatalogues()
    }, [])

    const clearFilter = () => {
        setCataloguesValue([])
        setPaymentFrom(0)
        setPaymentTo(0)
    }

    return (
        <div className="filter-input-container">
            <div className="filter-header">
                <Text
                    fs="20px"
                    fw="700"
                    style={{color: "#232134"}}
                >
                    Фильтры
                </Text>
                <Button onClick={() => clearFilter()} color="gray" variant="subtle">
                    <div className="clear-filter-button">
                        Сбросить все
                        <Image width={16} height={16} src={drop_filter} alt="Not found search icon"/>
                    </div>
                </Button>
            </div>
            <div className="filter-body">
                <div >
                    {loading === false ? <Select
                        data-elem="industry-select"
                        label="Отрасль"
                        placeholder="Выберите отрасль"
                        value={cataloguesValue}
                        onChange={setCataloguesValue}
                        data={catalogues.map(catalog => ({value: catalog.key, label: catalog.title.length > 30 ? catalog.title_trimmed : catalog.title}))}
                        radius="8px"
                    /> : <div>Spinner</div>}
                </div>
                <div className="double-select">
                    <NumberInput
                        data-elem="salary-from-input"
                        label="Оклад"
                        description="От"
                        value={paymentFrom}
                        onChange={setPaymentFrom}
                        step={10000}
                        min={0}
                    />
                    <NumberInput
                        data-elem="salary-to-input"
                        description="До"
                        value={paymentTo}
                        onChange={setPaymentTo}
                        step={10000}
                        min={0}
                    />
                </div>
            </div>
            <div className="filter-footer">
                <Button data-elem="search-button" onClick={() => searchVacancies()}>
                    Применить
                </Button>
            </div>
        </div>
    );
};

export default VacancyFilter;
