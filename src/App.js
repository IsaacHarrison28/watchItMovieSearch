import './App.css';
import {QueryClient, QueryClientProvider} from'@tanstack/react-query'
import { Home } from './pages/Home';
import { Heroes } from './pages/superheroes'
import { Superheroes } from './pages/fetchheroes'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from './pages/navbar'

function App() {
  const client = new QueryClient()
  return (
    <div className="App">
        <QueryClientProvider client={client}>
          <Router>
           <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/superheroes' element={<Heroes />} />
              <Route path='/fetch' element={<Superheroes />} />
            </Routes>
          </Router>
        </QueryClientProvider>
    </div>
  );
}

export default App;
