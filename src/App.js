import { Card, CardBody, CardFooter, CardHeader, CardTitle } from 'reactstrap';
import './App.css';
import { Link } from 'react-router-dom'
import Main from './components/body/Main';
import Menu from './components/menu/Menu';
import {menulist} from './list'

function App() {
  return (
    <div>
      <Card>
      <CardHeader>
        <Link to="/" style={{textDecoration:'none'}}>
          <CardTitle tag="h5">DEV YOUNG</CardTitle>
        </Link>
      <Menu menulist={menulist} />
      </CardHeader>
      <CardBody>  
        <Main />
      </CardBody>
      <CardFooter>
        Copy aright reserved@20220411
      </CardFooter>
      </Card>
    </div>
  );
}

export default App;
