import React from 'react';
import { SocialIcon } from 'react-social-icons';

import {
  Form,
  Container,
  Button
} from 'react-bootstrap';
import '../style/style.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
  }


  render() {
    return (
      <>
        <Container fluid='true' className='container'>
          <h1>Contact</h1>
          <Form>
            <Form.Group controlId='formBasicName' style={{ width: '80%' }}>
              <Form.Label>Name</Form.Label>
              <Form.Control type='name' placeholder='Enter name' />
            </Form.Group>
           
            <Form.Group controlId='formBasicEmail' style={{ width: '80%' }}>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-black'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId='formBasicMessage' style={{ width: '80%' }}>
              <Form.Label>Message</Form.Label>
              <Form.Control type='message' placeholder='Message' />
            </Form.Group>
            
            <Form.Group>
              <Button variant='danger' type='refresh' className='formButtons'>
                Refresh
              </Button>
              <Button variant='primary' type='submit' className='formButtons'>
                Submit
              </Button>
            </Form.Group>

          </Form>
          <SocialIcon
            url='https://www.linkedin.com/in/miranda-zermeno-58b30121a/'
            target='_blank'
          />
          <SocialIcon
            url='https://github.com/Zermeno94'
            target='_blank'
          />

        </Container>
        
      </>
    );
  }
}

export default Contact;
