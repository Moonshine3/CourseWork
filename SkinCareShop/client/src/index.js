import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client'; // import from correct location
import App from './App';
import UserStore from './store/UserStore';
import CosmeticsStore from "./store/CosmeticsStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root')); // use createRoot

root.render(
    <Context.Provider
        value={{
            user: new UserStore(),
            cosmetics: new CosmeticsStore(),
        }}
    >
        <App />
    </Context.Provider>
);