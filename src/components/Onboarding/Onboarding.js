import React,{useEffect, useState} from 'react';
import StepProgress from '../StepProgress/StepProgress';
import Input from '../Elements/Input/Input';
import Button from '../Elements/Button/Button';
import styles from './onboarding.module.scss';

function Onboarding() {
  const tabHeadings = [
    {
      tab: 0,
      main: "Welcome! First things First...",
      sub: "You can always change them later."
    },
    {
      tab: 1,
      main: "Let's set up a home for all your work",
      sub: "You can always create another workspace later."
    },
    {
      tab: 2,
      main: "How are you planning to use Eden?",
      sub: "We'll streamline your setup experience accordingly."
    },
    {
      tab: 3,
      main: "",
      sub: ""
    }
  ]
  const [tabNumber, setTabNumber] = useState(0);
  const [formState, setFormState] = useState({
    firstName: '',
    displayName: '',
    workspaceName: '',
    workspaceURL: '',
    usage: '',
  });

  useEffect(()=>{
    setFormState(
      {
        firstName: '',
        displayName: '',
        workspaceName: '',
        workspaceURL: '',
        usage: '',
      }
    )
  },[])

  function handleFormSubmit(e){
    e.preventDefault();
    console.log(e.target.value)
  }

  function handleClick(){

  }

  return (
    <div className={styles.Onboarding}>

      <StepProgress tab={tabNumber}/>

      <div className={styles.tabHeader}>
        <span className={styles.tabHeader__main}>{tabHeadings[tabNumber].main}</span>
        <span className={styles.tabHeader__sub}>{tabHeadings[tabNumber].sub}</span>
      </div>

      <div className={styles.form_section}>
        <form style={{width:'100%'}} onSubmit={handleFormSubmit} >
          { tabNumber === 0 &&
          <>
            <Input 
              id="text"
              label="First Name"
              placeholder='Steve Jobs'
              value={formState.text}
              // onChange={(value) => setFormState('text', value)}
              minLength="2"
              maxLength="25"
            />
            <Input
              id="text"
              label="Display Name"
              placeholder='Steve'
              value={formState.text}
              // onChange={(value) => setFormState('text', value)}
              minLength="2"
              maxLength="25"
            />
              <Button text="Create Workspace" tabNumber={tabNumber} onClick={handleClick} /> 
          </>
          }
          {tabNumber === 1 &&
            <>
              <Input
                id="text"
                label="Workspace Name"
                placeholder='Eden'
                value={formState.text}
                // onChange={(value) => setFormState('text', value)}
                minLength="2"
                maxLength="25"
              />
              <Input
                id="text"
                label="Workspace URL (optional)"
                placeholder='Example'
                value={formState.text}
                // onChange={(value) => setFormState('text', value)}
                minLength="2"
                maxLength="25"
              />
              <Button text="Create Workspace" />
            </>
          }
          {tabNumber === 2 &&
          <>
            <span>Random Card</span>
            <Button text="Create Workspace" />
          </>
          
          }
        </form>
      </div>
    </div>
  )
}

export default Onboarding;