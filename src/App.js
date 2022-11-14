import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';

import {Login} from "./components/Admin/login";
import {Sidebar} from "./components/Sidebar";
import {Main} from "./components/Main";
import {useEffect} from "react";
import {useUserInfo} from "./hooks/use-admin";


function App() {
    return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
