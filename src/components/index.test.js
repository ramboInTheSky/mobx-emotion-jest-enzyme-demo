import React from 'react';
import {
  shallow,
  configure
} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Album, Artist, QueryForm, ResultView} from './index'

configure({ adapter: new Adapter() })


describe('helpers Tests suite', () => {

    it('renders Album without errors', () => {
        shallow(<Album /> );
    })
    
    it('renders Artist without errors', () => {
        shallow(<Artist /> );
    })
    
    it('renders QueryForm without errors', () => {
        shallow(<QueryForm /> );
    })
    
    it('renders ResultView without errors', () => {
        shallow(<ResultView /> );
    })
    

})