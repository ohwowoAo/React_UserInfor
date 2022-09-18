import React, { useState } from 'react';
import Step1 from './components/Step1';

const App = () => {
  // const [username, setUsername] = useState('');
  // const [userage, setUserage] = useState('');
  const [form, setForm] = useState({
    username:'', userage:''
  })
  const  {username, userage} = form;
  const changeId = (e) => {
    setForm(e.target.value)
  }

  const changeAge = (e) => {
    setForm(e.target.value)
  }

  return (
    <div>
      <Step1 username={username} userage={userage} changeId={changeId} changeAge={changeAge}/>
    </div>
  );
};

export default App;