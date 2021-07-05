import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import allreducer from './Reducer/index';
const composemain=  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const  store=createStore(
  allreducer,composemain(applyMiddleware(thunk)))
  export default store;



