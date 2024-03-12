import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FaPlus } from "react-icons/fa6";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { VibancButton } from "../common/VibancButtons";


export function ItemOpenedAccordian({setGetReadyStep}) {
    const data = [
        {
            id: "01",
            title: "What’s your startup’s URL?",
            subTitle: "Don’t worry - buyers won’t see this unless you grant them access.",
            name: "Website",
            label: "Website",
            placeholder: "ex. piedpiper.ai"

        },
        {
            id: "02",
            title: "How much revenue have you made in the last 12 months?",
            name: "revenue",
            label: "TTM net revenue",
            placeholder: "Enter your TTM net profit"
        },
        {
            id: "03",
            title: "How much profit have you made in the last 12 months?",
            name: "TTM net profit",
            label: "TTM net profit",
            placeholder: "Enter your TTM net profit"

        },
        {
            id: "04",
            title: "What’s your name?",
            subTitle: "Don’t worry - buyers won’t see this unless you grant them access.",
            name: "firstName",
            label: "First Name",
            placeholder: "Enter your first name",
            name2: "lastName",
            label2: "Last Name",
            placeholder2: "Enter your last name"
        },
        {
            id: "05",
            title: "What’s your phone number?"
        },
        {
            id: "06",
            title: "What asking price will you set?"
        }

    ]
    const form = useForm({
        // resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values) => {

        let payload = {
            Email: values.email,
            Password: values.password,
            isAdmin: false
        }


    };


    return (
        <>
        <Accordion type="single" collapsible className="w-full ">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="">
                    {
                        data?.map((obj) => (
                            <>
                                <AccordionItem value={obj.id} className="border-2 border-[#ABD0C6] my-2 rounded-lg px-5 py-2" >
                                    <AccordionTrigger className="no-decoration">
                                        <div className="text-lg font-semibold">
                                            <span className="mr-4">
                                                {obj?.id}
                                            </span>
                                            <span>
                                                {
                                                    obj?.title
                                                }
                                            </span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className=" px-4 text-center">
                                            {
                                                obj?.subTitle &&
                                                <div className="font-normal my-2 text-lg">{obj?.subTitle}</div>

                                            }
                                            <div className="grid grid-cols-10 gap-4 ">
                                                {
                                                    obj?.name &&
                                                    <div className={`col-span-10  ${obj?.name2 ? "md:col-span-5" : "md:col-span-10 "}`} >
                                                    <FormField
                                                        control={form.control}
                                                        name={obj?.name}
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="flex justify-start font-normal text-[16px]">
                                                                    {obj?.label}
                                                                </FormLabel>
                                                                <FormControl>
                                                                    <Input
                                                                        {...field}
                                                                        placeholder={obj.placeholder}
                                                                        type="text"
                                                                        className="border-2 rounded-[10px] border-gray-400"
                                                                        //   disabled={loader}
                                                                        required

                                                                    />
                                                                </FormControl>
                                                            </FormItem>
                                                        )}
                                                    />

                                                </div>
                                                }
                                             
                                                {
                                                    obj?.name2 &&
                                                    <div className="col-span-10 md:col-span-5  ">
                                                        <FormField
                                                            control={form.control}
                                                            name={obj?.name2}
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="flex justify-start font-normal text-[16px]">
                                                                        {obj?.label2}
                                                                    </FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            {...field}
                                                                            placeholder={obj.placeholder2}
                                                                            type="text"
                                                                            className="border-2 rounded-[10px] border-gray-400"
                                                                            //   disabled={loader}
                                                                            required

                                                                        />
                                                                    </FormControl>
                                                                </FormItem>
                                                            )}
                                                        />

                                                    </div>
                                                }

                                            </div>





                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </>

                        ))

                    }
                </form>
            </Form>



        </Accordion>

         <div className='flex justify-end mr-5 mt-10'>
                    <VibancButton text="Next" isIcon={true} className='' onClick={()=>{setGetReadyStep("thanks for submitting")}}/>
                </div>
                </>
    )
}
