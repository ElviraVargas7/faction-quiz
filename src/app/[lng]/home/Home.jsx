import "./Home.scss"
import React from "react";
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import CustomizedButton from '../../components/CustomizedButton/CustomizedButton';

const Home = ({ lng }) => {
    return (
        <div className="home">
            <div className="home__language">
                <LanguageSwitcher lng={lng} />
            </div>

            <div className="home__start">
                <CustomizedButton lng={lng}/>
            </div>
        </div>
    )
}

export default Home;