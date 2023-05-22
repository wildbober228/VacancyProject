import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './navBar.css';
import {Image, Text} from "@mantine/core";
import union from "./assets/Union.png"

const NavBar = () => {
    const [searchPage, setSearchPage] = useState(true)
    return (
        <div>
            <header className="top-bar">
                <div className='logo'>
                    <Image width={30} height={30} src={union} alt="Not found vacancy image"/>
                    <Text className="logo-name">
                        Jobored
                    </Text>

                </div>

                <nav className='navigation'>
                    <div className="navigation-links">
                        <Link onClick={() => setSearchPage(true)} to="/">
                            <Text
                                w="130px"
                                style={{color: searchPage === false ? "#232134" : "#5E96FC"}}
                            >
                                Поиск вакансий
                            </Text>

                        </Link>
                        <Link onClick={() => setSearchPage(false)} to="/favorite">
                            <Text style={{color: searchPage === true ? "#232134" : "#5E96FC"}}>
                                Избранное
                            </Text>
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default NavBar;
