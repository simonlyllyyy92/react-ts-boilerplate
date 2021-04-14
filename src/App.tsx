import { Provider } from 'react-redux';
import { store } from './store';
import RespositoriesList from './views/repositories/RepositoriesList';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a Package</h1>
        <RespositoriesList />
      </div>
    </Provider>
  );
}

export default App;
