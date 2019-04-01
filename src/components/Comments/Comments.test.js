import React from 'react'
import { shallow } from 'enzyme'
import Comments from "./Comments"
import { findByTestAtrr } from "../../../Utils/index"

const setUp = (props = {}) => {
    const component = shallow(<Comments {...props} />)
    return component
}

describe('Render <Comments/>', () => {
    let wrapper;
    beforeEach(() => {
        const props = {
            comments: [1, 2],
            storyById: 1
        }
        wrapper = setUp(props)
    })
    it('Should render component without errors ', () => {
        const component = findByTestAtrr(wrapper, 'commentsComponent')
        expect(wrapper).toHaveLength(1);
    })

    it('Should render header ', () => {
        const component = findByTestAtrr(wrapper, 'Header')
        expect(wrapper).toHaveLength(1);
    })
})