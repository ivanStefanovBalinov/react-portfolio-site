import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Polygon, TileLayer, useMap } from 'react-leaflet'
import Iframe from 'react-iframe'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return clearTimeout()
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_3pishzd',
        'template_2utdrtb',
        refForm.current,
        'AdffRYupLqrY9Lt7R'
      )
      .then(
        () => {
          alert('Message sucessfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again.')
        }
      )
  }

  const center = [43.214020101663834, 27.91350410408221]
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Thank you for considering me for any potential opportunities. I am
            excited about the prospect of contributing my skills to your team
            and making meaningful impact to your projects. <br />
            Send me a message via contact form or find me on &nbsp;
            <a href="https://www.linkedin.com/in/%D0%B8%D0%B2%D0%B0%D0%BD-%D0%B1%D0%B0%D0%BB%D0%B8%D0%BD%D0%BE%D0%B2-6a0145271/">
              LinkedIn
            </a>
            . <br /> Sincerely, Ivan
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <div className="text-zone"></div>
      <div className="info-map">
        Ivan Balinov,
        <br />
        Bulgaria,
        <br />
        Varna <br />
        <span>i.balinov931@gmail.com</span>
      </div>
      <div className="map-wrap">
        {/* <MapContainer center={center} zoom={10} style={{ width: '500px' }}>
          <TileLayer
            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=Xgwnimwyn8RPtV4tQVgK"
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          ></TileLayer>
          <Polygon></Polygon>
        </MapContainer> */}

        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186126.44344789744!2d27.80282632326718!3d43.20475564634854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4538baaf3d7a1%3A0x5727941c71a58b7c!2z0JLQsNGA0L3QsA!5e0!3m2!1sbg!2sbg!4v1680717889883!5m2!1sbg!2sbg"
          width="100%"
          height="100%"
          position="initial"
          className="map"
        />
      </div>
      <Loader type="ball-pulse" />
    </>
  )
}

export default Contact
