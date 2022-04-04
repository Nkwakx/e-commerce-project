import './themes/App.css';
import Routing from './routers/Routing';
import Footer from './components/navigation/Footer'
import FirebaseAuthHookProvider from './firebase/FirebaseAuthHook';
import FirebaseDataHookProvider from './firebase/FirebaseDataHook';

function App() {

  return (
    <FirebaseAuthHookProvider>
      <FirebaseDataHookProvider>
        <div className="App">
          <Routing />

          <Footer year={new Date().getFullYear()} />
        </div>
      </FirebaseDataHookProvider>
    </FirebaseAuthHookProvider>
  );
}

export default App;
