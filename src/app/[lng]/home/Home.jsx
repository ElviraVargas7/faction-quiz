import "./Home.scss"
import React from "react";
import LanguageSwitcher from '@/app/components/LanguageSwitcher/LanguageSwitcher';
import StartButton from '@/app/components/StartButton/StartButton';

const Home = ({ lng }) => {
    return (
        <div className="home">
            <div className="home__language">
                <LanguageSwitcher lng={lng} />
            </div>

            <div className="home__start">
                <StartButton lng={lng}/>
            </div>
        </div>
    )
}

export default Home;