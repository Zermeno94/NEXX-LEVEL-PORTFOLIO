import React from 'react';
import {Container, Row} from 'react-bootstrap';
import '../style/style.css';
import Iframe from 'react-iframe';
import pdf from '../docs/Miranda_Zermeno_Resume.pdf';
import Sectiontitle from './Sectiontitle';

const Resume = () => {
  return (
    <>
      <Container fluid='true' className='container'>
    
        <Sectiontitle title = 'Resume' />
        <Row>
          <Iframe
            // url='https://drive.google.com/file/d/1kiMHz_495wYmKB00QJARgEJweeoXTR4R/view'
            title='My resume'
            allowFullScreen
            allowTransparency
            src={require('../docs/Miranda_Zermeno_Resume.pdf')}
            style={{ height: '400px' , width:'400px'}}
          />
        </Row>
        <Row>
          <a href={'https://drive.google.com/file/d/1kiMHz_495wYmKB00QJARgEJweeoXTR4R/view?usp=sharing'} target='_blank' rel='noopener noreferrer'>
            Download as PDF
          </a>
        </Row>
        
        <hr />
      </Container>
      

    </>
  );
};
export default Resume;
