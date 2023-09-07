import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}