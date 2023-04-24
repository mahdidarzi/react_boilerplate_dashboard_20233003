import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { AppProvider } from './providers/app';
import { AppRoutes } from './routes';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
