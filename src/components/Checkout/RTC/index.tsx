import { DataConnection } from 'peerjs'
// import { useEffect } from 'react'
interface Props {
  connectionType: 'user' | 'watcher'
}

const RTC = ({ connectionType }: Props) => {
  const setPeerJs = async (connectionType: string) => {
    const connectionId = 'a1'
    console.log('>>>>>  connectionType 2', `${connectionType}${connectionId}`)
    const { Peer } = await import('peerjs')

    if (connectionType === 'user') {
      console.log('Im user')
      const peer = new Peer(`user${connectionId}`, {
        debug: 2
      })
      peer.on('open', function (id) {
        const conn = peer.connect(`watcher${connectionId}`)
        console.log('>>>>>  My peer ID is: ' + id)
        peer.on('connection', function (conn) {
          console.log('>>>>>  connected with ' + `watcher${connectionId}`)
          conn.on('data', function (data) {
            console.log('Received', data)
          })
          conn.send('Hello!')
        })
        watckKeyboard(conn)
        watchScroll(conn)
      })
    }
    if (connectionType === 'watcher') {
      console.log('Im watcher')
      const peer = new Peer(`watcher${connectionId}`, {
        debug: 2
      })
      peer.on('open', function (id) {
        peer.connect(`user${connectionId}`)
        console.log('>>>>>  My peer ID is: ' + id)
        peer.on('connection', function (conn2) {
          conn2.on('data', function (data) {
            console.log('Received', data)
          })
          console.log('>>>>>  connected with ' + `user${connectionId}`)
          conn2.send('Hello!')
        })
      })
    }
  }

  function watckKeyboard(conn: DataConnection) {
    document.addEventListener('keydown', (event) => {
      console.log('>>>>>  event keydown', event)
      conn.send(event)
    })
  }

  function watchScroll(conn: DataConnection) {
    document.addEventListener('scroll', (event) => {
      console.log('>>>>>  event scroll', event)
      conn.send(event)
    })
  }

  if (navigator && process.browser) {
    setPeerJs(connectionType)
  }
  // useEffect(() => {
  //   if (navigator && process.browser) {
  //   }
  // }, [connectionType, setPeerJs])

  return <>RTC</>
}

export default RTC
