import { IdealStartup } from "@/components/buyer_components/steps/ideal_startup";
import { InterestTypes } from "@/components/buyer_components/steps/interest_types";
import NavigationBar from "@/components/header/NavigationBar";
import { QuestionStep } from "@/components/buyer_components/steps/questions_step";
export default function HandleQuestion() {
  return (
    <>
      <NavigationBar />
      <IdealStartup />
    </>
  );
}
