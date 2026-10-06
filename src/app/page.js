import CustomerNavbar from "@/app/components/CustomerNavbar";
import Hero from "@/app/components/home/Hero";
import ShopByTrade from "@/app/components/home/ShopByTrade";
import BestSelling from "@/app/components/home/BestSelling";
import BulkQuote from "@/app/components/home/BulkQuote";
import Professionals from "@/app/components/home/Professionals";
import Footer from "@/app/components/home/Footer";

export default function Home() {
  return (
    <div>
      <CustomerNavbar />
      <Hero />
      <ShopByTrade />
      <BestSelling />
      <BulkQuote />
      <Professionals />
      <Footer />
    </div>
  );
}