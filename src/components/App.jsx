import Header from './Header/Header';
import About from './About/About';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
