import './App.css';
import { AuthProvider } from './layout/AuthContext';
import RouterMain from './layout/RouterMain';

function App() {
  return (
   <AuthProvider>

      <RouterMain/>
      </AuthProvider>
  );
}

export default App;
