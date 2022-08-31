import '@testing-library/jest-dom';
import filmReducer from '../redux/film';

describe('test reducer', () => {
    it('reducer has default state', () => {
        const res = () => filmReducer(undefined, { type: undefined});
        expect(res()).toEqual({
            film: [],
            filters: [],
            search: '',
          });
    });
});