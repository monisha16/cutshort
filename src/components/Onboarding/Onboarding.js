import React,{useEffect, useState} from 'react';
import StepProgress from '../StepProgress/StepProgress';
import Input from '../Elements/Input/Input';
import Button from '../Elements/Button/Button';
import Card from '../Elements/Card/Card';
import styles from './onboarding.module.scss';
import check from '../../assests/icons/check-lg.svg';


function Onboarding() {
  const tabHeadings = [
    {
      tab: 1,
      main: "Welcome! First things First...",
      sub: "You can always change them later."
    },
    {
      tab: 2,
      main: "Let's set up a home for all your work",
      sub: "You can always create another workspace later."
    },
    {
      tab: 3,
      main: "How are you planning to use Eden?",
      sub: "We'll streamline your setup experience accordingly."
    },
    {
      tab: 4,
      main: "",
      sub: ""
    }
  ];
  const usageCards = [
    {
      id: 1,
      title: 'For myself',
      text: 'Write better.Think more clearly.Stay organized.'
    },
    {
      id: 2,
      title: 'With my team',
      text: 'Wikis, docs, tasks & projects, all in one place.'
    }
  ];
  const [tabNumber, setTabNumber] = useState(1);
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
    setFormState({...user,...workSpace,...usage});
    // if (tabNumber === 3) setTabNumber((tab) => tab + 1);
  }
  function handleFormSubmit(e){
    e.preventDefault();
    // console.log("formState", formState);
    if (tabNumber === '4') return;
    setTabNumber((tab) => tab + 1);
  }

  function handleCardSelect(){
    console.log("usage",usage)

  }

  return (
    <div className={styles.Onboarding}>

      <StepProgress tab={tabNumber} numberSteps={4}/>

      <div className={styles.tabHeader}>
        <span className={styles.tabHeader__main}>{tabHeadings[tabNumber-1].main}</span>
        <span className={styles.tabHeader__sub}>{tabHeadings[tabNumber-1].sub}</span>
      </div>

      <div className={styles.form_section}>
        
          { tabNumber === 1 &&
          <>
            <form onSubmit={handleFormSubmit} style={{width:'20rem'}}>
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
          {tabNumber === 2 &&
          <>
          <form onSubmit={handleFormSubmit} style={{ width: '20rem' }}>
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
          {tabNumber === 3 &&
          <div className={styles.tabThree}>
            <div className={styles.cardsContainer}>
              {usageCards.map((card) => {
                return <Card key={card.id} card={card} setUsage={setUsage} handleCardSelect={handleCardSelect} />
              })}
            </div>
            <Button text="Create Workspace" handleClick={handleClick} />
          </div>
          }
          { tabNumber === 4 &&
          <>
              <div className={styles.tabFour}>
                <div className={styles.tabFour__img}>
                  <img src={check} alt="check" />
                </div>
                <h1>Congratulations, {formState.displayName}!</h1>
                <p>You have completed onboarding, you can start using the Eden!</p>
              </div>
              <Button text="Launch Eden" handleClick={handleClick} />
          </>
          }
        
      </div>
    </div>
  )
}

export default Onboarding;