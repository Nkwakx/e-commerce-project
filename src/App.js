import './themes/App.css';
import Routing from './routers/Routing';
// import Footer from './components/navigation/Footer'
import FirebaseAuthHookProvider from './firebase/FirebaseAuthHook';
import FirebaseDataHookProvider from './firebase/FirebaseDataHook';
// import ToggleSidebar from './components/navigation/ToggleSidebar'

function App() {

  return (
    <FirebaseAuthHookProvider>
      <FirebaseDataHookProvider>
        <div className="App">
          <Routing />
        </div>
      </FirebaseDataHookProvider>
    </FirebaseAuthHookProvider>
  );
}

export default App;
