import './styles/index.scss'
import React, {Suspense} from "react";

import {useTheme} from "app/provider/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/provider/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>

                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App