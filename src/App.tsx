import './App.scss';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
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
