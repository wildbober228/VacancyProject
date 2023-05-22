import React, {useEffect, useState} from 'react';
import "./vacancyCard.css"
import {Image, Text} from "@mantine/core";
import start_false from './assets/Star_false.jpg'
import start_true from './assets/Start_true.jpg'
import location_icon from './assets/LocationIcon.png'
import {Link} from "react-router-dom";
import {
    LOCAL_STORAGE_KEY_VACANCY,
    toLocalStore
} from "../../helpers/localStoreHelper";
import {useActions} from "../../helpers/hooks/useActions";
import {useSelector} from "react-redux";

const VacancyCard = ({vacancy, inList}) => {
    const [favoriteFlag, setFavoriteFlag] = useState(false);
    const {addVacancyToFavoriteList, deleteVacancyFromFavoriteList, addAllVacanciesToFavoriteList} = useActions()
    const {favoritesId} = useSelector(state => state.favorite)

    useEffect(() => {
        if (favoritesId.includes(vacancy.id)) {
            setFavoriteFlag(true)
        } else {
            setFavoriteFlag(false)
        }
    }, [vacancy])

    const payment = (currency, payment_from, payment_to) => {

        let result = {}
        if (payment_from === 0 && payment_to === 0) {
            result = <>
                з/п не указана
            </>
        }

        if (payment_from === 0) {
            result = <>
                з/п {payment_to} {currency}
            </>
        } else if (payment_to === 0) {
            result = <>
                з/п {"от " + payment_from} {currency}
            </>
        } else {
            result = <>
                з/п {payment_from} {"- " + payment_to} {currency}
            </>
        }

        return <div style={{fontWeight: 600}}>
            {result}
        </div>

    }

    const onHandleFavoriteClick = () => {
        setFavoriteFlag(!favoriteFlag)
        toLocalStore(vacancy, LOCAL_STORAGE_KEY_VACANCY, addVacancyToFavoriteList, deleteVacancyFromFavoriteList, addAllVacanciesToFavoriteList)
    }

    return (
        <div className="vacancy-card-container">
            {inList === true ? <Link
                style={{textDecoration: "none"}}
                data-elem={`vacancy-${vacancy.id}`}
                className="vacancy-name"
                to={{pathname: `/vacancy/${vacancy.id}`}}>{vacancy.profession}
            </Link> : <div>
                <Text
                    size="28px"
                    fw="700"
                    lh="34px"
                    style={{color: "#232134"}}
                >
                    {vacancy.profession}
                </Text>
            </div>}
            <div className="price" style={{fontSize: 16}}>
                <div>
                    {payment(vacancy.currency, vacancy.payment_from, vacancy.payment_to)}
                </div>
                <div>
                    •
                </div>
                <div>
                    {vacancy.type_of_work.title}
                </div>

            </div>
            <div className="address" style={{fontSize: 16}}>
                {vacancy.address && <>
                    <Image width={13.33} height={16.09}
                           src={location_icon} alt="Not found location icon"/>
                    {vacancy.address}
                </>}
            </div>
            <div className="favoriteButton">
                <Image
                    data-elem={`vacancy-${vacancy.id}-shortlist-button`}
                    onClick={() => onHandleFavoriteClick()}
                    width={22}
                    height={22}
                    src={favoriteFlag === false ? start_false : start_true} alt="Not found favorite button image"
                />
            </div>
        </div>
    );
};

export default VacancyCard;
