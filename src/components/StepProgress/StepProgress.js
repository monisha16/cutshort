import React from 'react';
import styles from './stepProgress.module.scss';
// import classes from './stepProgress.module.scss';
function StepProgress({ tab, numberSteps }) {
  let numSteps;
  // numSteps = arrayofDigits(4);
  if (numberSteps === null || undefined) {
    numSteps = arrayofDigits(numberSteps);
  } else {
    numSteps = arrayofDigits(4);
  }

  // Convert Number to array
  function arrayofDigits(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr;
  }

  return (
    <div className={styles['stepper']} >
      <ul className={styles['steps']}>
        {numSteps.map((item) => {
          return (
            <li
              className={
                (tab === item
                  ? `${styles['step']} ${styles['step__incomplete']} ${styles['step__active']}`
                  : tab < item
                    ? ` ${styles['step']} ${styles['step__incomplete']} ${styles['step__inactive']}`
                    : ` ${styles['step']} ${styles['step__complete']} ${styles['step__inactive']}`)
              }
              key={item}
            >
              <span className={styles['step__icon']}>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
// let progressWidth;
//   switch (tab) {
//     case 1:
//       progressWidth = 20;
//       break;
//     case 2:
//       progressWidth = 50;
//       break;
//     case 3:
//       progressWidth = 80;
//       break;
//     case 4:
//       progressWidth = 100;
//       break;

//     default:
//       progressWidth = 20;
//       break;
//   }
//   const NUMBER_OF_STEPS = [0,1,2,3];

//     const myStyle = {
//       width: `${progressWidth}%`
//     };
//     const progressBar = NUMBER_OF_STEPS.map((id) => {
//       if (id <= tab) {
//         return (
//           <div
//             key={id}
//             // onClick={() => props.changeStep(id)}
//             className={` ${classes['progress-step']}  ${classes['progress-step-active']}`}
//           />
//         );
//       } else { //onClick={() => props.changeStep(id)}
//         return <div key={id}  className={classes['progress-step']} />;
//       }
//     });

//     return (
//       <React.Fragment>
//         <div className={classes.progressbar}>
//           <div className={classes.progress} style={myStyle} />
//           {progressBar}
//         </div>
//       </React.Fragment>
//     );
//   };


export default StepProgress;
