import './App.css';

// imports
import Main from './assets/components/Main';
import Card from './assets/components/common/Card/Card';
import ContactSection from './assets/components/common/Card/ContactSection/ContactSection';

function App() {
  return (
    <>
      <Main>
        <Card>
          <ContactSection />
        </Card>
      </Main>
    </>
  );
}

export default App;
