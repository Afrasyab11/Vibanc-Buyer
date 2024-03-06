import NavigationBar from "@/components/header/NavigationBar"

export default function Layout({ children }) {

    return (
        <>
            <NavigationBar />
            
            <div className=" md:px-12 xl:mx-4">
                {children}
            </div>

        </>
    );
}   