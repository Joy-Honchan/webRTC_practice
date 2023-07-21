import { useEffect, useRef } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const getVideoAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      } else {
        throw new Error('videoRef.current is null')
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="App">
      <button onClick={getVideoAccess}>get video access</button>
      <video
        ref={videoRef}
        id="video"
        width="320"
        height="240"
        controls
      ></video>
    </div>
  )
}

export default App
