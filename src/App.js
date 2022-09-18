import React, { useEffect, useRef, useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

const App = () => {
  const [form, setForm] = useState({
    username:'', userage:'', useraddr:'', usernum:'', userjob:'', useremail:'', usersex:'', userhob:'' 
  })
  const  {username, userage, useraddr, usernum, userjob, useremail, usersex, userhob} = form;
  const [step, setStep] = useState(1);

  const changeInput = (e) => {
    const { value, name} = e.target; 
    //타겟의 value와 name
    setForm({
      ...form,
      [name] : value
    })
    console.log(username, userage, useraddr, usernum)
  }
  const focusRef = useRef(null);
  const onPrev = () => {
    setStep(prev => prev - 1)
  }
  const onNext = () => {
    setStep(prev => prev + 1)
    console.log(step)
  }

  useEffect(()=>{
    if(step > 3){
      focusRef.current.focus();
    }
    
  },[step])
  return (
    <div>
      {
        step === 1 &&
        <Step1 username={username} userage={userage} useraddr={useraddr} usernum={usernum} changeInput={changeInput} focusRef={focusRef} onNext={onNext} />
      }
      {
        step === 2 &&
        <Step2 userjob={userjob} useremail={useremail} usersex={usersex} userhob={userhob}  changeInput={changeInput} focusRef={focusRef} onPrev={onPrev} onNext={onNext}/>
      }
      {
        step === 3 &&
        <Step3 {...form} onPrev={onPrev}/>
      }
    </div>
  );
};

export default App;