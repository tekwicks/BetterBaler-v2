import Hero from '../components/sections/Hero';
import BalerAtAGlance from '../components/home/BalerAtAGlance';
import WeatherSection from '../components/home/WeatherSection';
import ServicesSection from '../components/home/ServicesSection';
import GovernmentActivitySection from '../components/home/GovernmentActivitySection';
import CivicTechBanner from '../components/home/CivicTechBanner';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Official community website of the Municipality of Baler, Aurora. Access municipal services, weather & coastal updates, and local government resources."
        keywords="baler, aurora, weather updates, surfing, coastal watch, municipal services, local government, civic tech, better baler"
      />
      <main className="flex-grow">
        <Hero />
        <BalerAtAGlance />
        <ServicesSection />
        <WeatherSection />
        <GovernmentActivitySection />
        <CivicTechBanner />
      </main>
    </>
  );
};

export default Home;

