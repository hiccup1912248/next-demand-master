import PurchaseButton from "@/components/Common/PurchaseButton";
import Layout from "@/components/Layout";
import TypeGrid from "@/components/play/TypeGrid";


export default function Play() {
    return (
        <Layout>
            <main className="main">
                <div className="custom">
                    <TypeGrid />
                    <div className="callout space-top--x-large">
                        <div className="callout__frame">
                            <blockquote>
                                <q>The <span className="text-highlight">Go to market playbooks from Demand enabled our team to leverage Demand and scale faster.</span></q>
                                <cite>- Christian H.</cite>
                            </blockquote>
                        </div>
                    </div>
                    <PurchaseButton />
                </div>
            </main>
        </Layout>
    )
}