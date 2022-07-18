import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import './Sidebar.less';
import { useSelector, useDispatch, connect } from 'react-redux'
import { Button, Spin } from 'antd';
import { changeName, fecthComments } from '../actions/actions';



const Sidebar: React.FC<any> = ({ comments, onFetchComments, loading }) => {

    const [localComments, setLocalComments] = useState([])

    useEffect(() => {
        setLocalComments(comments)
    }, [comments])

    const onHandle = () => {
        changeName()
    }
    const onHandleFetch = () => {
        onFetchComments()
    }


    return (
        <div className="Sidebar">
            Sidebar
            <Button onClick={onHandle}>Кнопка Sidebara</Button>
            <Button onClick={onHandleFetch}>Загрузить комменты</Button>
            {
                loading ? <Spin tip="Loading..." /> :
                    localComments && localComments.length > 0 ?
                        comments.map((el: any) => {
                            return <div key={el.id}>{el.name}</div>
                        }) : null
            }

        </div >
    );

}

function mapStateToProps(state: any) {
    console.log('mapstatetoprops sdasdasdasd> ', state)
    const { comments } = state;
    return {
        comments: comments.commentsList,
        loading: comments.commentsLoading
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        onFetchComments: () => [
            dispatch(fecthComments())
        ]
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);