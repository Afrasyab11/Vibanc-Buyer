import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog"

import Image from "next/image";
import firstImg from "@/assets/images/leftimage.png"
import secondImg from "@/assets/images/middleimage.png"
import thirdImg from "@/assets/images/rightimage.png"
import leftimg from "@/assets/images/left_rectangle.png";
import rightimg from "@/assets/images/right_rectangle.png";


export function DialogDemo({open, setOpen}) {
  return (
    <div>
    <Dialog open={open} onOpenChange={setOpen}>
     <DialogContent className="w-[260px] sm:w-[555px] h-[210px] sm:h-[380px] pt-2 sm:pt-12 text-[#ff7236] rounded">
        <div className="absolute">
          <Image src={leftimg}  className="relative -bottom-[120px] sm:-bottom-[199px] rounded-b"/>
        </div>
        <div className="absolute">
        <Image src={rightimg} className="relative top-[65px] sm:top-[79px] sm:h-[300px] rounded-b"/>
        </div>
        <DialogHeader>
          <DialogTitle className="text-[11px] sm:text-[22px] font-medium ml-5 flex sm:justify-center text-[#53b3a8] my-2 sm:my-8 z-10">Greate Relationships start here</DialogTitle>
          <DialogDescription className="w-[220px] sm:w-[400px] mx-auto text-center font-medium text-[10px] sm:text-sm z-10">
           Please commit to our Code of Conduct to help build a fair and trusted community. Learn more
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-evenly z-10 w-[100px] mx-auto gap-x-2 sm:w-full px-4">
          <Image src={firstImg} className="w-[40px] h-[40px] sm:w-auto sm:h-auto"/>
          <Image src={secondImg} className="w-[40px] h-[40px] sm:w-auto sm:h-auto"/>
          <Image src={thirdImg} className="w-[40px] h-[40px] sm:w-auto sm:h-auto"/>

        </div>
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
        <div className="flex justify-center mb-8">
        <button className='bg-[#234C46] text-white px-5 py-1 font-semibold my-3 rounded-full z-10' onClick={setOpen}>Ok Got, it</button>
        </div>
      </DialogContent>
    </Dialog>
    </div>

  )
}
