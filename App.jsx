import { Provider } from "react-redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import authReducer from "./store/reducers/auth"
import userReducer from "./store/reducers/user"
import AppNavigator from './navigation/AppNavigator'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}