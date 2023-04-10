import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect } from 'react'
import Loader from 'react-loaders'
import TextSphere from './TextSphere'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return clearTimeout()
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's ']}
              idx={15}
            />
          </h1>
          <h3>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['T', 'e', 'c', 'h', ' ', 's ', 't', 'a', 'c', 'k']}
              idx={15}
            />
          </h3>
          <p>
            At this point, my tech stack includes HTML, CSS, JavaScript, NodeJs
            and React. In the meantime, I continue to study and improve my
            skills in handling them. I am also always motivated to upgrade my
            skills with something new. Additionally, I have knowledge of graphic
            design and the use of graphic processing software as well as basic
            knowledge of Ui and Ux design.
          </p>
        </div>
        <div>
          <TextSphere />
        </div>
      </div>
      <Loader type="ball-pulse" />
    </>
  )
}

export default Skills
