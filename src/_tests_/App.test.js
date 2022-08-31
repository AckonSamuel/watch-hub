import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import  App from '../App';

it('A test for film component', () => {

    const filmTre = renderer.create(
        <Provider store={store}>
            <App />
        </Provider>
    );

    expect(filmTre).toMatchSnapshot();
});