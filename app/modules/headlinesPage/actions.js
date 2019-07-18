import axios from 'axios';

import * as t from './constants';

export function getNewsHeadlines(country = "us") {
    return (dispatch) => {

        dispatch({type: t.RETRIEVING_HEADLINES});
        return new Promise((resolve, reject) => {

            const url = `https://power-of-truth-server.herokuapp.com/headlines`

            axios.get(url)
                .then(res => res.data)
                .then((data) => {
                    dispatch({type: t.HEADLINES_AVAILABLE, data})
                    resolve()
                })
                .catch(error => {
                    dispatch({type: t.HEADLINES_ERROR, error})
                    reject()
                });
        })
    };
}

export function getHeadlinesBySource(source) {
    return (dispatch) => {
        dispatch({type: t.RETRIEVING_HEADLINES});
        return new Promise((resolve, reject) => {

            const url = `https://power-of-truth-server.herokuapp.com/headlines/source/${source}`;

                axios.get(url)
                .then(res => res.data)
                .then((data) => resolve(data))
                .catch(error => reject(error));
        })
    };
}

export function getHeadlinesByBiasGroup(source) {
    return (dispatch) => {
        dispatch({type: t.RETRIEVING_HEADLINES});
        return new Promise((resolve, reject) => {

            const url = `https://power-of-truth-server.herokuapp.com/headlines/bias/${source}`;

                axios.get(url)
                .then(res => res.data)
                .then((data) => resolve(data))
                .catch(error => reject(error));
        })
    };
}

export function getHeadlinesBySearch(search) {
    return (dispatch) => {
        dispatch({type: t.RETRIEVING_HEADLINES});
        return new Promise((resolve, reject) => {

            const url = `https://power-of-truth-server.herokuapp.com/search?q=${search}`;

                axios.get(url)
                .then(res => res.data)
                .then((data) => resolve(data))
                .catch(error => reject(error));
        })
    };
}

// export function getHeadlinesByTopic() {
//   const url = `https://power-of-truth-server.herokuapp.com/headlines/topic/Trump`;
// console.log('1')
//   axios.get(url)
//   console.log('2')
//   console.log(axios.get(url).then(res => res.data))
//
//
// }
