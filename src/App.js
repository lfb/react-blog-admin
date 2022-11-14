import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';

import {Login} from "./components/Admin/login";
import {Sidebar} from "./components/Sidebar";
import {Main} from "./components/Main";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
