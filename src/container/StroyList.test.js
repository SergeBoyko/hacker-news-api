import React from 'react'
import { shallow } from 'enzyme'
import StoryList from "./StoryList"
import { findByTestAtrr } from "../../Utils/index"

const setUp = (props = {}) => {
    const component = shallow(<StoryList {...props} />)
    return component
}


describe('Render <StroyList />', () => {

    let wrapper;
    beforeEach(() => {
        const props = {
            allIdtories: [1]
        }
        wrapper = setUp(props)
    })

    it('Should render component without errors ', () => {
        const component = findByTestAtrr(wrapper, 'StoryList')
        expect(wrapper).toHaveLength(1);
    })

    it('Should render headeer ', () => {
        const component = findByTestAtrr(wrapper, 'Header')
        expect(wrapper).toHaveLength(1);
    })
})