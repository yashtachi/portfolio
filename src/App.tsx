import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import TypedName from './components/TypedName';
import HogwartsLetter from './components/HogwartsLetter';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Layout>
        <div className="pt-24">
          <TypedName />
          <HogwartsLetter />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </Layout>
    </>
  );
}

export default App;