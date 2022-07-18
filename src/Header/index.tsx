import React from 'react';
import { Link } from 'react-router-dom';
import './Header.less';
import { connect } from 'react-redux'
import { Button } from 'antd';
import { changeName } from '../actions/actions';



const Header: React.FC = (props: any) => {
    return (
        <header className="Header">
            Header {props.login}
            <Button onClick={props.onClickChangeLogin} >Поменять</Button>
        </header >
    );

}

function mapStateToProps(state: any) {
    console.log('mapstatetoprops > ', state)
    const { header } = state;
    return {
        login: header.login
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        onClickChangeLogin: () => [
            dispatch(changeName())
        ]
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
