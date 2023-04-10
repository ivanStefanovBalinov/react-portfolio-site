import TagCloud from 'TagCloud'
import { useEffect } from 'react'
import './TextSphere.scss'
import { useWindowResize } from './useWindowResize'

const TextSphere = () => {
  const [height2, windowWidth] = useWindowResize()

  useEffect(() => {
    const container = '.tagcloud'
    const texts = [
      'HTML',
      'CSS',
      'SASS',
      'JavaScript',
      'React',
      'Vue',
      'Next.Js',
      'Node.JS',
      'Jquery',
      'ES6',
      'GIT',
      'GITHUB',
    ]

    const options = {
      radius: windowWidth < 600 ? 120 : 300,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      keep: true,
    }

    TagCloud(container, texts, options)
  }, [])

  return (
    <>
      <div className="text-sphere">
        <span className="tagcloud"></span>
      </div>
    </>
  )
}

export default TextSphere
