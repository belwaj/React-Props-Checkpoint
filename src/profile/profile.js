import './profile.css'
import PropTypes from 'prop-types';

const Profile =  (props) => {
let {fullName,bio,profession,children,handleName}=props
return (
  <>
  <div className='container '>
  <span className="animate-charcter" >Hi ! i'm {fullName}</span>
  <p className='animate-charcter'>{bio}</p>
  <p className='position animate-charcter'>{profession}</p>
  <img src={children} alt='jsx-a11y/alt-text'/>
  <button style={{color: "orange" ,marginTop: "1rem"}} className='glow-on-hover' onClick={() => handleName(`My name is Wajih Belhadj `)}>
     Click Me
   </button>
   </div>
  </>
)
}
Profile.defaultProps = {
  fullName: "Belhadj Wajih ",
  bio: "Not my full Bio",
  profession: "Designer"
}
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
 profession: PropTypes.string
};
export default Profile