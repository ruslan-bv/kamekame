import * as React from 'react';

export interface UserContextInterface {
    email: string;
}

export const UserContext = React.createContext<UserContextInterface | null>(null);

const UserContextProvider:React.FC<any> = ({ children }) => {
    const [email, setEmail] = React.useState('');

    const value = { email, setEmail };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>

    )
}

export default UserContextProvider;
