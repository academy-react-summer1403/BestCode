
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SignUpFirstStep from './SignUp1';
import SignUpSecondStep from './signUp2'; 
import SignUpThirdStep from './signUp3';

function Stepper1(){

    const [activeStep,setActiveStep] = React.useState(0)

    const nextStep =() =>{
        if(activeStep < 2)
        setActiveStep((currentStep) => currentStep + 1)  
        hide(activeStep)
    }
      function hide(x){
        {activeStep.display = "none"}
     }

    
    
    const previousStep =() =>{
        if(activeStep !== 0)
        setActiveStep((currentStep) => currentStep - 1)
    }    
    return(
        <div>
            <Stepper activeStep={activeStep}>
                <Step>
                   <StepLabel><SignUpFirstStep/> </StepLabel>
                </Step>
                <Step>
                   <StepLabel><SignUpSecondStep/></StepLabel>
                </Step>
                <Step>
                   <StepLabel><SignUpThirdStep/></StepLabel> 
                </Step>


            </Stepper>
            <h3>{activeStep}</h3>
            <Button onClick={() => nextStep()}>Next Step</Button>
            <br/>
            <br/>
            <Button onClick={() =>previousStep()}>previous step</Button>
        </div>
    )
}

export default Stepper1