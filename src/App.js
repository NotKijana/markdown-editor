import Layout from './layout/Layout';
import AppState from './context/AppState';

function App() { 
  return (
    <AppState>
      <div className="App">
        <Layout />
      </div>
    </AppState>
  );
}

export default App;
