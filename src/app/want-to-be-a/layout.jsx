import NavigationBar from "@/components/header/NavigationBar"

export default function Layout({ children }) {

    return (
        <> 
            <NavigationBar />
         <div className="px-40">
                {children}
        </div>
        </>
      
    );
}   