import './App.css';

import { AuthenticatedApp } from "./components/AuthenticatedApp";
import { UnauthenticatedApp } from "./components/UnauthenticatedApp";
import {useAdminInfo} from "./hooks/use-admin";

function App() {
    const {admin} = useAdminInfo()

    return (
        <div className="App">
            {admin && admin.id ? <AuthenticatedApp/> : <UnauthenticatedApp/> }
        </div>
    );
}

export default App;
