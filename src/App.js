
import './App.css';
import ProfilePhoto from './components/profile/ProfilePhoto';
import FullName from './components/profile/FullName';
import Address from './components/profile/Address';
function App() {
  return (
    <div className='all'>
      <ProfilePhoto />
      <div className='all2'>
      
      <FullName />
      
      <Address />
      
      </div>
    </div>
  );
}

export default App;
