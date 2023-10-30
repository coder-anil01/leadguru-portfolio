import { Typewriter } from 'react-simple-typewriter'

const Typed = () => {
  return (
    <div className='typed'>
    <h2 style={{fontWeight: 'bold' }}>
    And I'm a{' '}
      <span style={{ color: '#0075ff', fontWeight: 'bold' }}>
        <Typewriter
          words={['Software Engineer','Ui / Ux designer', 'MERN stack Devloper','Digital marketer']}
          loop={true}
          cursor
          cursorStyle='_'
          typeSpeed={50}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </span>
    </h2>
  </div>
    
  )
}

export default Typed
