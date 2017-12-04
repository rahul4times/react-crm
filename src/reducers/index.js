import {combineReducers} from 'redux';
import People from './reducer_people_list';

const rootReducer = combineReducers({
  people: People
});

export default rootReducer;
