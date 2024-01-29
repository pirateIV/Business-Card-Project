import './App.css';

// imports
import Main from './assets/components/Main';
import Card from './assets/components/Card/Card';
import AsideMain from './assets/components/Card/Aside/Aside.Main';
import UserProfileImage from './assets/components/Card/Image/UserProfileImage';
import UserInfoSection from './assets/components/Card/ProfileInfoSection/ProfileInfoSection';


function App() {
  return (
    <>
      <Main>
        <Card>
          <AsideMain />
          <UserProfileImage />
          <UserInfoSection />
        </Card>
      </Main>
    </>
  );
}

export default App;
