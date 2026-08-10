import AboutCard from "./components/AboutCard";
import ContactCard from "./components/ContactCard";
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard";
import SkillsCard from "./components/SkillsCard";



function App() {
  return (
    <main>
      <ProfileCard />
      <AboutCard />
      <SkillsCard />
      <ContactCard />
      <Footer/>
    </main>
  );
}

export default App;