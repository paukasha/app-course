import {Link, Route, Router, Routes} from 'react-router-dom'

import './styles/index.scss'
import React, {Suspense, useContext, useState} from "react";
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";
import {AboutPageAsync} from "./pages/AboutPage/AboutPageAsync";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";


const App = () => {
const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
                <Suspense fallback={<div>Loading...</div>}>
            <Routes>

                <Route path='/about' element={<AboutPageAsync />} />
                <Route path='/about' element={<MainPageAsync />} />
            </Routes>
                </Suspense>


        </div>
    )
}

export default App