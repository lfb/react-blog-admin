import './App.css';

import { AuthenticatedApp } from "./components/AuthenticatedApp";
import { UnauthenticatedApp } from "./components/UnauthenticatedApp";
import {useUserInfo} from "./context/AuthContext";

function App() {
    const {user} = useUserInfo()

    return (
        <div className="App">
            {user ? <AuthenticatedApp/> : <UnauthenticatedApp/> }
        </div>
    );
}

export default App;
