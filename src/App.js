import React from "react";
import {applyMiddleware, createStore} from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./reducers";
import Routes from "./routers";
import {SaveLangToStorage} from "./reducers/language";

// create store
const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(SaveLangToStorage)),
  // other store enhancers if any
);

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;

window.store = store;