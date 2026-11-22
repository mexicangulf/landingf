import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import QuickStart from './components/QuickStart';
import StudentLife from './components/StudentLife';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NPC from './components/NPC';
import Courses from './components/Courses';
import Typer from './components/Typer';
import Fortune from './components/Fortune';
import Activities from './components/Activities';
import Modal from './components/Modal';
import { ModalProvider } from './components/ModalContext';

function App() {
  return (
    <ModalProvider>
    <div className="min-h-screen bg-white">
      <Header />
      <Modal></Modal>
      <Hero />
      <Welcome />
      <StudentLife />
      <Activities />
      <NPC />
      <Courses />
      <Typer />
      <Fortune />
      <QuickStart />
      <Contact />
      <Footer />
    </div>
    </ModalProvider>
  );
}

export default App;
