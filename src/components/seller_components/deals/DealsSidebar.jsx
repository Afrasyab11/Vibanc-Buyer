"use client"
import React, { useState } from 'react';
import EvaluateBuyers from './EvaluateBuyers';
import FieldOffer from './FieldOffer';
import Diligence from './Diligence';
import Transfer from './Transfer';
import FinalStep from './FinalStep';

const DealsSidebar = () => {
    const [currentStep, setCurrentStep] = useState(0);
    
    // Array to hold step details
    const steps = [
        { index: 0, name: 'Evaluate Buyers', component: <EvaluateBuyers /> },
        { index: 1, name: 'Field Offers', component: <FieldOffer /> },
        { index: 2, name: 'Diligence', component: <Diligence /> },
        { index: 3, name: 'Transfer', component: <Transfer /> },
        { index: 4, name: 'Final Step', component: <FinalStep /> },
    ];

    // Function to handle step click
    const handleStepClick = (index) => {
        setCurrentStep(index);
    };

    return (
        <div className="md:flex gap-x-24 items-start p-4 mt-12">
            <div>
            {steps.map((step) => (
                <React.Fragment key={step.index}>
                    <div className="flex items-center" onClick={() => handleStepClick(step.index)}>
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep === step.index ? 'border-[#009f88]' : 'text-[#234C46]'}`}>
                            <span className="text-[13px] font-medium text-[#1C2C29]">0{step.index + 1}</span>
                            {/* <Image src={tick}/> */}
                        </div>
                        <span className={`ml-4 text-[16px] hover:cursor-pointer font-medium ${currentStep === step.index ? 'text-[#009f88]' : 'text-[#234C46]'} `}>{step.name}</span>

                    </div>
                    {step.index < steps.length - 1 && <div className="h-8 border-l-4 border-[#ABD0C6] border-dotted mx-[12px] my-[10px]"></div>}
                </React.Fragment>
            ))}
            </div>

            <div className='mt-12 md:mt-0'>
      
            {steps[currentStep].component}
            </div>
           
      
        </div>
    );
};

export default DealsSidebar;
