const RTC = () => {
  const peerConnection = new RTCPeerConnection()
  const dataChannelOptions = {
    ordered: false,
    // maxPacketLifeTime: 3000
    maxRetransmits: 0
  }
  const dataChannel = peerConnection.createDataChannel(
    'myLabel',
    dataChannelOptions
  )
  dataChannel.onerror = (error) => {
    console.log('Data Channel Error:', error)
  }

  dataChannel.onmessage = (event) => {
    console.log('Got Data Channel Message:', event.data)
  }

  dataChannel.onopen = () => {
    dataChannel.send('Hello World!')
  }

  dataChannel.onclose = () => {
    console.log('The Data Channel is Closed')
  }
  return <>RTC</>
}

export default RTC
