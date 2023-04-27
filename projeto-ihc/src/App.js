import Alert from "./components/Alert";
import Confirmacao from "./components/Confirmacao";
import Content from "./components/Content";
import Global from "./components/Global";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Global />
            <Content />
            <Footer />
            <Alert />
            <Confirmacao />
        </div>
    );
}

export default App;