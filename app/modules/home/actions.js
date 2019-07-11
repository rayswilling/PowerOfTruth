import axios from 'axios';

import * as t from './constants';

export function getNewsHeadlines(country = "uk") {
    return (dispatch) => {
        
        dispatch({type: t.RETRIEVING_HEADLINES});
        return new Promise((resolve, reject) => {
            const url = `${t.API_URL}country=us&apiKey=${t.API_KEY}&pageSize=10`;
            
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
            const url = `${t.API_URL}country=us&apiKey=${t.API_KEY}&pageSize=10`;
                axios.get(url)
                .then(res => res.data)
                .then((data) => resolve(data))
                .catch(error => reject(error));
        })
    };
}