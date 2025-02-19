import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '@/app/provider/StoreProvider';
import App from './app/App';
import '@/app/styles/index.scss';
import ThemeProvider from './app/provider/ThemeProvider/ui/ThemeProvider';
import '@/shared/config/i18n/i18n';
// eslint-disable-next-line import/order
import { ErrorBoundary } from '@/app/provider/ErrorBoundary';

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
if (!container) {
    throw new Error('Контейнер root  не найден');
}

const root = createRoot(container);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
export { Theme } from '@/shared/const/theme';
