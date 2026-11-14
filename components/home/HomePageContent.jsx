import HomeHero from "@/components/home/HomeHero";
import HomeAbout from "@/components/home/HomeAbout";
import HomeServices from "@/components/home/HomeServices";
import HomeGovernment from "@/components/home/HomeGovernment";
import HomeLeadership from "@/components/home/HomeLeadership";
import HomeWhyChoose from "@/components/home/HomeWhyChoose";

export default function HomePageContent() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeGovernment />
      <HomeLeadership />
      <HomeWhyChoose />
    </>
  );
}
