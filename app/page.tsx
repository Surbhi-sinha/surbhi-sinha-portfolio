import { CursorGlow } from "./components/new-design/CursorGlow";
import { NavbarNew } from "./components/new-design/NavbarNew";
import { HeroNew } from "./components/new-design/HeroNew";
import { HeadlineNew } from "./components/new-design/HeadlineNew";
import { ShowcaseNew } from "./components/new-design/ShowcaseNew";
import { ServicesNew } from "./components/new-design/ServicesNew";
import { ImpactNew } from "./components/new-design/ImpactNew";
import { StackNew } from "./components/new-design/StackNew";
import { CapabilitiesNew } from "./components/new-design/CapabilitiesNew";
import { ProjectsNew } from "./components/new-design/ProjectsNew";
import { JourneyNew } from "./components/new-design/JourneyNew";
import { ContactNew } from "./components/new-design/ContactNew";
import { FooterNew } from "./components/new-design/FooterNew";

export default function Main() {
  return (
    <div className="bg-black">
      <CursorGlow />
      <NavbarNew />
      <main>
        <HeroNew />
        <HeadlineNew />
        <ShowcaseNew />
        <ServicesNew />
        <ImpactNew />
        <StackNew />
        <CapabilitiesNew />
        <ProjectsNew />
        <JourneyNew />
        <ContactNew />
      </main>
      <FooterNew />
    </div>
  );
}
