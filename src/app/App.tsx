import './styles/index.scss'
import React from "react";

import {useTheme} from "app/provider/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/provider/router";
import {Navbar} from "widgets/Navbar";


const App = () => {
const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>


            <Navbar />
            <AppRouter />


        </div>
    )
}

export default App