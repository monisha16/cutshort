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
  const [user, setUser] = useState({
    firstName: '',
    displayName: '',
  })
  const [workSpace, setWorkSpace] = useState({
    workspaceName: '',
    workspaceURL: '',
  })
  const [usage, setUsage] = useState({
    usage: ''
  })
  const [formState, setFormState] = useState({
    firstName: '',
    displayName: '',
    workspaceName: '',
    workspaceURL: '',
    usage: '',
  });

  useEffect(()=>{
    console.log(formState)
  },[formState])

  function handleClick(){
    setFormState({...user,...workSpace,...usage})
  }
  function handleFormSubmit(e){
    e.preventDefault();
    console.log("formState", formState);
    if (tabNumber === '3') return;
    setTabNumber((tab) => tab + 1);
  }

  return (
    <div className={styles.Onboarding}>

      <StepProgress tab={tabNumber}/>

      <div className={styles.tabHeader}>
        <span className={styles.tabHeader__main}>{tabHeadings[tabNumber].main}</span>
        <span className={styles.tabHeader__sub}>{tabHeadings[tabNumber].sub}</span>
      </div>

      <div className={styles.form_section}>
        
          { tabNumber === 0 &&
          <>
          <form onSubmit={handleFormSubmit}>
            <Input 
              id="text"
              label="First Name"
              placeholder='Steve Jobs'
              value={user.firstName}
              onChange={(value) => setUser({...user, 'firstName': value })}
              minLength="2"
              maxLength="25"
            />
            <Input
              id="text"
              label="Display Name"
              placeholder='Steve'
              value={user.displayName}
              onChange={(value) => setUser({...user,'displayName': value})}
              minLength="2"
              maxLength="25"
            />
            <Button text="Create Workspace" handleClick={handleClick} /> 
          </form>
          </>
        
          }
          {tabNumber === 1 &&
            <>
          <form onSubmit={handleFormSubmit}>
              <Input
                id="text"
                label="Workspace Name"
                placeholder='Eden'
                value={workSpace.workspaceName}
                onChange={(value) => setWorkSpace({ ...workSpace, 'workspaceName': value })}
                minLength="2"
                maxLength="25"
              />
              <Input
                id="text"
                label="Workspace URL (optional)"
                placeholder='Example'
                value={workSpace.workspaceURL}
                onChange={(value) => setWorkSpace({ ...workSpace, 'workspaceURL': value })}
                minLength="2"
                maxLength="25"
              />
            <Button text="Create Workspace" handleClick={handleClick} />
            </form>
            </>
          }
          {tabNumber === 2 &&
          <>
          <form onSubmit={handleFormSubmit}>
            <span>Random Card</span>
            <Button text="Create Workspace" handleClick={handleClick} />
          </form>
          </> 
          
          }
        
      </div>
    </div>
  )
}

export default Onboarding;