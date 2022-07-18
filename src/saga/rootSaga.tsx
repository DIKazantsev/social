
import { put, takeEvery, all, call } from 'redux-saga/effects'

const urlAPI = 'https://jsonplaceholder.typicode.com/comments?_limit=10'





function* helloSaga() {
    console.log('Hello Sagas!')
}

async function fetchJson() {
    let resp;
    try {
        let data = await fetch(urlAPI);
        resp = { data: await data.json() };
    }
    catch (e) {

    }
    return resp;
}

function* fetchComments() {
    try {
        yield put({ type: 'FETCH_COMMENTS_START' });
        const { data, err } = yield call(fetchJson);
        console.log(data)
        if (data)
            yield put({ type: 'FETCH_COMMENTS_SUCCESS', payload: data });
        else
            yield put({ type: 'FETCH_COMMENTS_FAILURE', ...err.message });
    }
    catch (e) {
        yield put({ type: 'FETCH_COMMENTS_FAILURE', message: e });
    }
}

function* watchCommentsFetch() {
    yield takeEvery('FETCH_COMMENTS', fetchComments)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchCommentsFetch()
    ])
}