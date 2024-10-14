import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'pages/PageLoader/ui/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);
    const routes = useMemo(() => Object.values(routeConfig)
        .filter((route) => {
            if (route.authOnly && !isAuth) {
                return false;
            }

            return true;
        }), [isAuth]);

    return (
        <div className="page-wrapper">
            <Routes>
                {
                    routes
                        .map(({ element, path }) => (

                            <Route
                                key={path}
                                path={path}
                                element={(
                                    <Suspense
                                        fallback={<PageLoader />}
                                    >
                                        {element}
                                    </Suspense>
                                )}
                            />

                        ))
                }
            </Routes>

        </div>
    );
};

export default memo(AppRouter);
