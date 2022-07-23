
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Form , Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      
<Form className="form">

<Form.Group controlId='formEmail'>
  <Form.Label >Email address</Form.Label>
  
  <Form.Control className="mb" type="email" placeholder="Exampled address.com" />
</Form.Group>

<Form.Text>We'll never share your email with anyone else.</Form.Text>
<Form.Group controlId='formPassword'>
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="password" />

</Form.Group>
<Form.Group className='form-check'>
  <Form.Control type="checkbox" className="form-check-input"  id="flexCheckDefault" />
  <Form.Label className="form-check-label" for="flexCheckDefault">  subscribe for newsletter</Form.Label>
</Form.Group>

<Button type="submit" variant='primary'>submit</Button>
</Form>
 
    </div>
  );
}

export default App;
