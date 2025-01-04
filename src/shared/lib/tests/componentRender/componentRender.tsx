import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from '@/shared/config/i18n/i18nForTest';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import {StateSchema, StoreProvider} from '@/app/provider/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';

export interface componentRenderOptions {
    route?: string,
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const { route = '', initialState, asyncReducers } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
}
