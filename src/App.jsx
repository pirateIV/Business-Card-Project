import './App.css';

// imports
import Main from './assets/components/Main';
import Card from './assets/components/Card/Card';
import AsideMain from './assets/components/Card/Aside/Aside.Main';


function App() {
  return (
    <>
      <Main>
        <Card>
          <AsideMain />
        </Card>
      </Main>
    </>
  );
}

export default App;
