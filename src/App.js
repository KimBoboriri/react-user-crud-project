import { Card, CardBody, CardFooter, CardHeader } from 'reactstrap';
import './App.css';
import './modal.css';
import Main from './components/body/Main';
import Menu from './components/menu/Menu';
import { Provider } from 'react-redux'
import store from './redux/store'
import Logo from './components/logo/Logo';
import Footer from './components/footer/Footer';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Card>
        <CardHeader>
          <Logo />
          <Menu />
        </CardHeader>
        <CardBody>  
          <Main />
        </CardBody>
        <CardFooter>
          <Footer />
        </CardFooter>
        </Card>
      </Provider>
    </div>
  );
}


export default App;
