import { FaWhatsappSquare, FaInstagramSquare,FaLinkedin,FaFacebookSquare} from 'react-icons/fa';
import '../style/About.css'
import homeimg from '../image/home-image.png'
import Typed from '../component/Typed';
const About = () => {
  return (
    <div>
        <div className='about'>
        <div className='about-1st-text'>
            <h1>Hi i'm Anil</h1>
            <Typed/>
            <div className='social-media-icon'>
              <a href="https://wa.link/phf06j" rel="noreferrer" target='_blank'><FaWhatsappSquare style={{color:"#128c7e"}}/></a>
              <a href="https://www.instagram.com/coderanil_com/" rel="noreferrer" target='_blank'><FaInstagramSquare style={{color:"#ee2a7b"}}/></a>
              <a href="https://www.facebook.com/anilsgpa62/" rel="noreferrer" target='_blank'><FaFacebookSquare style={{color:"#3b5998"}}/></a>
              <a href="https://www.linkedin.com/in/anil-kumar-2a7625289/" rel="noreferrer" target='_blank'><FaLinkedin style={{color:"#0072b1"}}/></a>
            </div>
            <p>"Make money with me" is a collaborative approach to online income generation. It entails partnering with others for joint ventures, affiliate marketing, or team projects. Pooling resources, skills, and networks can lead to shared profits and mutual success in the digital landscape.</p>
            <div className="about-mySelf-detail">
              <p><strong>Qualification:- </strong>B.tech</p>
              <p><strong>Phone:- </strong>8987194176</p>
              <p><strong>Currently:- </strong>Working</p>
              <p><strong>Live in:- </strong>India, Biihar(patna)</p>
              <p><strong>birthday:- </strong>17-01-2002</p>
              <p><strong>Age:-</strong>22</p>
            </div>
        </div>
        <img className='about-1st-img' src={homeimg} alt="" />
    </div>
    </div>
  )
}

export default About
