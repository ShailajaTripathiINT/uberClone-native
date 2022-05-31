import {CreateStore} from 'redux';
import reducer from './Reducer/Index';

export default function configureStore(initialState){
  const store = CreateStore(reducer,initialState)
  return store;
}