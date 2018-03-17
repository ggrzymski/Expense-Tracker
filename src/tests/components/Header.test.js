import React from 'react';
import Header from '../../components/Header';
import {shallow} from 'enzyme';

test('Header Correct Render', () => {
    const wrapper = shallow(<Header />);
    expect((wrapper)).toMatchSnapshot();
});

