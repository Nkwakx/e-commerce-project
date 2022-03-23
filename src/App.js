import './themes/App.css';
import Routing from './routers/Routing';
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Routing />
    
      <Footer year={new Date().getFullYear()} /> 
    </div>
  );
}

export default App;
