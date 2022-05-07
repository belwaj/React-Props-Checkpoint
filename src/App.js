import './Style.css';

import myWonderfulImage from "./imageInSrc.jpg"
import Profile from './profile/profile';

function App() {
  const handleName= name => alert(name);
  return (
 <>

 <Profile fullName='Wajih Belhadj' bio='I am a 27 years old' profession='I work as a production manager'  handleName={handleName} >{myWonderfulImage}</Profile>
 
 </>
  );
}
export default App;
