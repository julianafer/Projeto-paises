// import {BrowserRouter as Router, Link, Router} from 'react-router-dom'

import Alert from "./components/Alert";
import Confirmacao from "./components/Confirmacao";
import Content from "./components/Content";
import Global from "./components/Global";

function App() {
    return (
        <div>
            <Global />
            <Content />
            <Alert />
            <Confirmacao />
        </div>
    );
}

export default App;