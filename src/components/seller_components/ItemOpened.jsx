import React from 'react'
import Stepper from '../common/Stepper'
import { ItemOpenedAccordian } from './ItemOpenedAccordian';

const ItemOpened = ({setGetReadyStep}) => {
    const steps = [
        'Startup’s URL',
        '12 months revenue',
        '12 months profit',
        'What’s your name?',
        'What’s your phone number?',
        'What asking price will you set?'
      ];
    return (
        <section className=" gap-4 p-4 m-auto">
            <div className="grid grid-cols-12 ">
            <div className="col-span-12 md:col-span-4 h-[100vh]">
             <Stepper currentStep={1} steps={steps}/>
            </div>
            <div className="col-span-12 md:col-span-8 h-[100vh] ">
            <ItemOpenedAccordian setGetReadyStep={setGetReadyStep}/>
            </div>
          </div>

        </section>
    )
}

export default ItemOpened
