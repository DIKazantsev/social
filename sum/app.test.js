import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { shallow, mount, render } from 'enzyme';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });



describe('Первый тест', () => {


    it('allows us to set props', () => {
        const wrapper = shallow(<App count={8} />)
        const text = wrapper.find('.prop-value')
        expect(text.text()).toBe('8')

        // const button = wrapper.find('.check-btn')
        // button.simulate('click')

        // expect(wrapper.find('.block-text').text()).toEqual('Мой текст')

    });


    it('renders the title', () => {
        const wrapper = render(<App />);
        expect(wrapper.find('.App-header')).toHaveLength(1)
    });

    // it('Блок теста второй', () => {
    //     const wrapper = shallow(<App />)
    //     const button = wrapper.find('.check-btn')
    //     button.simulate('click')

    //     const text = wrapper.find('.block-text')
    //     console.log(text.text())
    //     expect(text.text()).toBe('')
    // })

})