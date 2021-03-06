import React, { FC, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle, faStopCircle } from '@fortawesome/free-solid-svg-icons'

export const MusicSearch: FC = () => {
  const [keyword, setKeyword] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [flag, setFlag] = useState(false)
  const [music, setMusic] = useState<any>()

  useEffect(() => {
    setMusic(MusicKit.getInstance())
  }, [])

  const inputKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const keywordSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(keyword)

    // let music = MusicKit.getInstance()
    music.api
      .search(keyword, { limit: 30, types: 'artists,songs' })
      .then((datas: any) => {
        console.log(datas)
        setResults(datas.songs.data)
        console.log(datas.songs.data)
        setFlag(true)
      })
  }

  const play = (id: string) => {
    console.log(id)
    music.setQueue({ song: id }).then(() => {
      music.play()
    })
  }

  const pause = () => {
    console.log('pause')
    music.stop()
    // music.player.stop()
  }

  const tableView = () => {
    return (
      <table>
        <tbody>
          {results.map((r, i) => (
            <tr key={i}>
              <td>
                <img
                  src={r.attributes.artwork.url.replace(/({w}|{h})/g, '100')}
                  alt="artworkUrl"
                />
              </td>
              <td>{r.attributes.name}</td>
              <td>
                <FontAwesomeIcon icon={faPlayCircle} onClick={() => play(r.id)}/>
                <FontAwesomeIcon icon={faStopCircle} onClick={pause} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  return (
    <div>
      <form>
        <input type="text" value={keyword} onChange={inputKeyword} />
        <button type="submit" onClick={keywordSearch}>
          検索
        </button>
      </form>

      {flag && tableView()}
    </div>
  )
}
