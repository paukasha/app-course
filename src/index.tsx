import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/provider/StoreProvider';
import App from './app/App';
import 'app/styles/index.scss';
import ThemeProvider from './app/provider/ThemeProvider/ui/ThemeProvider';
import 'shared/config/i18n/i18n';
// eslint-disable-next-line import/order
import { ErrorBoundary } from 'app/provider/ErrorBoundary';

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
