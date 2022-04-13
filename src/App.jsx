import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='main'>
          <div className='container main__container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}
