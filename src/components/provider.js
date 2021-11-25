import * as React from 'react';


const Provider = React.createContext({
    month: new Date().getMonth(),
    year: new Date().getFullYear()
});

export default Provider;

