import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [beeScript, setBeeScript] = useState<string>('Loading Bee script...')
  const [overlays, setOverlays] = useState<Array<{ id: number; top: number; left: number; duration: number }>>([])

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

      const position = {
        top: 25 + Math.random() * 50,
        left: 25 + Math.random() * 50,
      }

      const minDuration = 3000
      const maxDuration = 18000
      const duration = Math.floor(minDuration + Math.random() * (maxDuration - minDuration))
      const id = Date.now() + Math.floor(Math.random() * 1000)

      setOverlays((prev) => [...prev, { id, top: position.top, left: position.left, duration }])

      window.setTimeout(() => {
        setOverlays((prev) => prev.filter((o) => o.id !== id))
      }, duration)
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
      {overlays.map((o) => (
        <div
          key={o.id}
          className="bee-video-overlay"
          style={{ top: `${o.top}%`, left: `${o.left}%` }}
        >
          <iframe
            width="396"
            height="703"
            src="https://www.youtube.com/embed/9HYG_oI8iS8?autoplay=1&mute=0&start=0&end=18"
            title="WE FINALLY BECAME BE BEES🙏🏻😭"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      ))}
      <h1 className="bee-script-title">We Can Be Bees</h1>
      <pre className="bee-script">{beeScript}</pre>
    </div>
  )
}

export default App
