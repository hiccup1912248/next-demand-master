import PurchaseButton from "@/components/Common/PurchaseButton";
import Layout from "@/components/Layout";
import ForthTransitionSection from "@/components/Platform/ForthTransitionSection";
import IntroSection from "@/components/Platform/IntroSection";
import MarkupSection from "@/components/Platform/MarkupSection";
import SecondTextSlideSection from "@/components/Platform/SecondTextSlideSection";
import SecondTransitionSection from "@/components/Platform/SecondTransitionSection";
import FirstTextSlideSection from "@/components/Platform/FirstTextSlideSection";
import ThirdTransitionSection from "@/components/Platform/ThirdTransitionSection";
import FirstTransitionSection from "@/components/Platform/FirstTransitionSection";
import VideoModal from "@/components/Platform/VideoModal";

export default function Platform() {
    return (
        <Layout>
            <main className="main">
                <div className="custom platform">
                    <IntroSection />
                    <FirstTransitionSection />
                    <div style={{ background: 'linear-gradient(180deg, #ECECEC 0%, #FEFEF3 100%)' }}>
                        <MarkupSection />
                        <SecondTransitionSection />
                        <FirstTextSlideSection />
                        <SecondTransitionSection />
                        <ThirdTransitionSection />
                        <SecondTextSlideSection />
                    </div>
                    <ForthTransitionSection />
                    <VideoModal />
                </div>
                <div className="space-top--xx-large">
                    <PurchaseButton />
                </div>
            </main>
        </Layout>
    );
}