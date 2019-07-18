import axios from 'axios';
import React from 'react';

import * as t from './constants';

import { SearchBar } from 'react-native-elements';

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
