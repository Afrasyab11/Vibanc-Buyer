import Header from "@/components/header/Header";

export default function Layout({ children }) {

    return (
        <> 
        <Header />
         <div className="px-40 mt-16">
                {children}
        </div>
        </>
      
    );
}   