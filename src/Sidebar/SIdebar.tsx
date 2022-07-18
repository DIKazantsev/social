import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import './Sidebar.less';
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd';
import { changeName } from '../actions/actions';


const Sidebar: React.FC = (props: any) => {

    const login = useSelector((state: any) => {
        console.log('LOGIIIIN', state)
        return state.header.login

    })


    const dispatch = useDispatch()

    const onHandle = () => {
        dispatch(changeName())
    }


    return (
        <div className="Sidebar">
            Sidebar
            <Button onClick={onHandle}>Кнопка Sidebara</Button>
            <div>
                А тут получили данные через хук {login}
            </div>
        </div >
    );

}

export default Sidebar;