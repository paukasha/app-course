import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('with one param', () => {
        const params = getQueryParams({
            text: 'value',
        });

        expect(params).toBe('?text=value');
    });

    test('with one multiple params', () => {
        const params = getQueryParams({
            text: 'value',
            value: '14563',
        });

        expect(params).toBe('?text=value&value=14563');
    });

    test('with one multiple undefined', () => {
        const params = getQueryParams({
            text: 'value',
            value: undefined,
        });

        expect(params).toBe('?text=value');
    });
});
