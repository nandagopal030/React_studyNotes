import React from 'react';
import './App.css';
import Application from './components/application/Form';
import Skill from './components/skills/Skill';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div>
      {/* <Skill skillName={['html', 'css', 'js']} /> */}
      {/* <Counter /> */}
      <Application />
    </div>
  );
}

export default App;
