import { Card, CardBody, CardFooter, CardHeader, CardTitle } from 'reactstrap';
import './App.css';
import { Link } from 'react-router-dom'
import Main from './components/body/Main';
import Menu from './components/menu/Menu';
import { Provider } from 'react-redux'
import store from './redux/store'
import Logo from './components/logo/Logo';

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
          Copy aright reserved@20220411
        </CardFooter>
        </Card>
      </Provider>
    </div>
  );
}


export default App;
