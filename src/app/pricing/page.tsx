import Layout from "@/components/Layout";
import PricingHeadLine from "@/components/Pricing/PricingHeadLine";
import PricingCard from "@/components/Pricing/PricingCard";
import IncludingService from "@/components/Pricing/IncludingService";
import FunctionPlan from "@/components/Pricing/FunctionPlan";
import BigDemand from "@/components/Pricing/BigDemand";
import QASection from "@/components/Pricing/QASection";
import TagSection from "@/components/Pricing/TagSection";

export default function Home() {
    return (
        <Layout>
            <main className="main">
                <div className="custom">
                    <PricingHeadLine />
                    <PricingCard />
                    <IncludingService />
                    <FunctionPlan />
                    <BigDemand />
                    <QASection />
                    <TagSection />
                </div>
            </main>
        </Layout>
    );
}
