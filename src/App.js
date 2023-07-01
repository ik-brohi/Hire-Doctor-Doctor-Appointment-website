import './App.css';
import { RouterProvider } from 'react-router-dom';
import route from './components/Routes/Router';

function App() {
  return (
    <div className="">
     <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
