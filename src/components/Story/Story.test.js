import React from 'react'
import { shallow } from 'enzyme'
import Story from "./Story"
import { findByTestAtrr } from "../../../Utils/index"

const setUp = (props = {}) => {
    const component = shallow(<Story {...props} />)
    return component
}


describe('Render <Stroy/>', () => {

    describe('Render with props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                stories: [1],
                kids: [1]
            }
            wrapper = setUp(props)
        })

        it('Should render component without errors ', () => {
            const component = findByTestAtrr(wrapper, 'Story')
            expect(wrapper).toHaveLength(1);
        })

    })

    discribe('Render without props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                stories: [1]
            }
            wrapper = setUp()
        })

        it('Should render Spinner ', () => {
            const component = findByTestAtrr(wrapper, 'Spinner')
            expect(wrapper).toHaveLength(1);
        })
    })


})