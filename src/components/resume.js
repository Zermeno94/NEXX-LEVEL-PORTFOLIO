import React from 'react';
import {Container, Row, Table } from 'react-bootstrap';
import '../style/style.css';
import Pdf from '../docs/';
import Docs from '../docs/Miranda_Zermeno_Resume.pdf';

const Resume = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <h2>Resume</h2>
        <Row>
          <iframe
            title='My resume'
            allowFullScreen
            allowTransparency
            src={require('../docs/Profile.pdf')}
            style={{ height: '400px' }}
          />
        </Row>
        <Row>
          <a href={'../docs/Miranda_Zermeno_Resume.pdf'} target='_blank' rel='noopener noreferrer'>
            Download as PDF
          </a>
        </Row>
        
        <hr />
      </Container>
      <Container fluid='true' className='container'>
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>#</th>
              <th>Course Name</th>
              <th>University</th>
              <th>Subjects</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Programming 1</td>
              <td>Aalto</td>
              <td>Basics of Scala, Object Oriented Programming</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Programming 2</td>
              <td>Aalto</td>
              <td>Intermediate Scala, Functional Programming Basics </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Programming Studio 2</td>
              <td>Aalto</td>
              <td>
                Developing Own Scala Project, Unified Modeling Language, Version
                Control
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Developing Modern Web Platforms</td>
              <td>Metropolia</td>
              <td>Basics of HTML, CSS, & Vanilla JavasSript </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Mastering Git</td>
              <td>Metropolia</td>
              <td>Version Control</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Responsive Web Applications with Bootstrap & CSS</td>
              <td>Metropolia</td>
              <td>Mobile-first Developing, CSS Frameworks</td>
            </tr>
          </tbody>
        </Table>
      </Container>

    </>
  );
};
export default Resume;
