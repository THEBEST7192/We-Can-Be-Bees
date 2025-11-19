import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [beeScript, setBeeScript] = useState<string>('Loading Bee script...')
  const [videoVisible, setVideoVisible] = useState(false)
  const [videoPosition, setVideoPosition] = useState({ top: 50, left: 50 })

  useEffect(() => {
    const beesUrl = new URL('./BEES.txt', import.meta.url)

    fetch(beesUrl.href)
      .then((res) => res.text())
      .then((text) => setBeeScript(text))
      .catch(() => {
        setBeeScript('Failed to load Bee script.')
      })
  }, [])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      const shouldShow = Math.random() < 0.55
      if (!shouldShow) {
        return
      }

      setVideoPosition({
        top: 25 + Math.random() * 50,
        left: 25 + Math.random() * 50,
      })

      setVideoVisible(true)

      window.setTimeout(() => {
        setVideoVisible(false)
      }, 7000)
    }, 12000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="bee-script-container">
      <div className="bee-sky">
        <div className="bee bee-1">
          <div className="bee-body" />
          <div className="bee-wing bee-wing-left" />
          <div className="bee-wing bee-wing-right" />
        </div>
        <div className="bee bee-2">
          <div className="bee-body" />
          <div className="bee-wing bee-wing-left" />
          <div className="bee-wing bee-wing-right" />
        </div>
        <div className="bee bee-3">
          <div className="bee-body" />
          <div className="bee-wing bee-wing-left" />
          <div className="bee-wing bee-wing-right" />
        </div>
        <div className="bee bee-4">
          <div className="bee-body" />
          <div className="bee-wing bee-wing-left" />
          <div className="bee-wing bee-wing-right" />
        </div>
        <div className="bee bee-5">
          <div className="bee-body" />
          <div className="bee-wing bee-wing-left" />
          <div className="bee-wing bee-wing-right" />
        </div>
      </div>
      {videoVisible && (
        <div
          className="bee-video-overlay"
          style={{ top: `${videoPosition.top}%`, left: `${videoPosition.left}%` }}
        >
          <iframe
            width="396"
            height="703"
            src="https://www.youtube.com/embed/9HYG_oI8iS8?autoplay=1&mute=1"
            title="WE FINALLY BECAME BE BEES🙏🏻😭"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      )}
      <h1 className="bee-script-title">We Can Be Bees</h1>
      <pre className="bee-script">{beeScript}</pre>
    </div>
  )
}

export default App
