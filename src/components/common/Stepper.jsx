import React from 'react';

const Stepper = ({ currentStep ,steps}) => {
 

  return (
    <div className="flex flex-col items-start p-4">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center">
            <div className={`w-8 h-8 flex  items-center justify-center rounded-full ${index <= currentStep ? 'bg-[#009F88]' : ' border-2 border-[#ABD0C6] '}`}>
              <span className="text-[13px] font-medium text-[#1C2C29]">0{index + 1}</span>
              {/* <Image src={tick}/> */}
            </div>
            <span className="ml-4 text-[16px] font-medium text-[#234C46]">{step}</span>
          </div>
        {
            index < steps.length - 1 && 
            <div className=" h-8 border-l-4  border-[#ABD0C6] border-dotted  mx-[12px] my-[10px]"></div>
        }
          
        
           
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
