import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { shallow } from 'enzyme';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });



describe('Первый тест', () => {
    it('Блок теста первый', () => {
        const wrapper = shallow(<App />)
        const text = wrapper.find('.block-text')
        console.log(text.text())
        expect(text.text()).toBe('Вот мой текст')
    })

    it('Блок теста второй', () => {
        const wrapper = shallow(<App />)
        const button = wrapper.find('.check-btn')
        button.simulate('click')

        const text = wrapper.find('.block-text')
        console.log(text.text())
        expect(text.text()).toBe('')
    })

})