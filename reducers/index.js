import { combineReducers } from 'redux';
import auth from './auth_reducer';
import petForm from './pet_form_reducer';
import pets from './pet_reducer';

export default combineReducers({
	auth, petForm, pets
});
