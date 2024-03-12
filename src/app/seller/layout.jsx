import Header from "@/components/header/Header";
import NavigationBar from "@/components/header/NavigationBar";

export default function Layout({ children }) {
  return (
    <div className="">
         <div className="h-[10vh]"> <NavigationBar /></div>
      <div className=" md:px-12 xl:mx-4  h-[90vh] overflow-y-scroll">{children}</div>
    </div>
  );
}
