import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex);


let store = new Vuex.Store(
    {
        state: {
            photos: []
        },
        mutations: {
            SET_PHOTOS_TO_STATE: (state, photos) => {
                state.photos = photos;
            }
        },
        actions: {
            GET_PHOTOS_FROM_API({commit}) {
                return axios('https://jsonplaceholder.typicode.com/photos', {
                    method: "GET"
                })
                .then((photos) => {
                    commit('SET_PHOTOS_TO_STATE', photos.data)
                    return photos;
                })
                
                .catch((error) => {
                    console.log(error)
                    return error;
                })
                
            }
        },
        getters: {
            PHOTOS(state) {
                return state.photos;
            }
        }
    }
);

export default store;