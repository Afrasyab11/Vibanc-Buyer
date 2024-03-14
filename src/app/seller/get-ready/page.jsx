'use client'
import DescribeStartup from "@/components/seller_components/DescribeStartup";
import GetReadyForMarketPlace from "@/components/seller_components/GetReadyForMarketPlace";
import ThanksForSubmitting from "@/components/seller_components/ThanksForSubmitting";
import ItemOpened from "@/components/seller_components/ItemOpened";
import { useState } from "react";

export default function GetReady(){
  const [getReadyStep,setGetReadyStep]=useState("ready_market_place")

    return (
     <>
     {
      getReadyStep=="ready_market_place" ? 
      <GetReadyForMarketPlace setGetReadyStep={setGetReadyStep} /> : getReadyStep=="describe_startup" ?
      <DescribeStartup setGetReadyStep={setGetReadyStep}/>: getReadyStep=="startup_url" ? <ItemOpened setGetReadyStep={setGetReadyStep}/> :<ThanksForSubmitting/> 
     }
     </>
    )
  }