import { Provider } from 'react-redux';
import { store } from './store/configStore';
import { Example } from './views';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>Hello Template</h1>
        <Example />
      </div>
    </Provider>
  );
}

export default App;
