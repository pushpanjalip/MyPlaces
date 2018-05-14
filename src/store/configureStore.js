import { createStore, combineReducers } from 'redux';
import placesReducers from './reducers/root';

const rootReducer = combineReducers({
    places: placesReducers
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;