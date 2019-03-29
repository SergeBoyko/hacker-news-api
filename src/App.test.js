import React from 'react'
import { shallow } from 'enzyme'
import App from "./App"
import { findByTestAtrr } from "../Utils/index"
//import Comments from '../Comments/Comments';

const setUp = (props = {}) => {
    const component = shallow(<App {...props} />)
    return component
}


describe('<App />', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('Should render basic root App ', () => {

        // console.log(component.debug())
        // // // wrapper.setProps({ length: 1 })
        const wrapper = findByTestAtrr(component, 'App')
        expect(wrapper).toHaveLength(1);
    })
})