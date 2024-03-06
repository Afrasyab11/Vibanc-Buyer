"use client";
import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardDescription
} from "@/components/ui/card";
import Image from 'next/image';
//{id, text, icon, name}
function InputCard(props) {


  return (
    <>
      <div className="inputCard">
        <Card className={`border-2 ${props.checked ? 'border-green-500' : ''}`}>
          <input type="radio" id={props.id} className='' checked={props.checked}
            {...props} // Spread all props from register
            onChange={(e) => props.onChange(e.target.checked)} />
          <label htmlFor={props.id}>

            <CardContent className=" md:px-1 mt-5 flex flex-col justify-center items-center gap-y-2">
              <div className=''>
                <Image src={props.icon} alt=""></Image>
              </div>
              <p className='w-fit '>{props.text}</p>
            </CardContent>
          </label>
        </Card>
      </div>
    </>
  )
}

export default InputCard;