import NavigationBar from "@/components/header/NavigationBar"
import Header from "@/components/header/Header";

export default function Layout({ children }) {

    return (
        <>
            <div>
                <Header/>
                {children}
            </div>

        </>
    );
}   