import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/CounterSlice';

interface CounterProps {
    className?: string;
}

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <h1 data-testid="value-title">
                value =
                {counterValue}
            </h1>

            <Button data-testid="increment-button" onClick={increment}>increment</Button>
            <Button data-testid="increment-button" onClick={decrement}>decrement</Button>
        </div>
    );
};
