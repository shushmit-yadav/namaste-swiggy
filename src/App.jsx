import Header from './components/Header.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='min-h-screen'>
      <Header />
      <main className="pt-12">
        <Outlet />
      </main>
    </div>
  )
}

export default App
