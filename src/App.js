import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Markup, Editor, Container, Column, Row, RuleInput, RuleLable, StyleInput, Button, Document} from './styled'

function App() {
  return (
    <Container>
      <Column>
        <Button>
          NewRule
        </Button>
      </Column>
      <Column>
        <Button>
          Random Text
        </Button>
        <Document>
          <Editor/>
          <Markup/>
        </Document>
      </Column>
    </Container>
  );
}

export default App;
