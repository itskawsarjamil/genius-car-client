import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Router/Routes/Routes';

function App() {

  return (
    <div data-theme="white" className='max-w-screen-xl mx-auto'>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
