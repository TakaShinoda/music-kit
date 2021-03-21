import React, { FC, useState } from 'react'

export const MusicSearch: FC = () => {
  console.log('呼ばれた')
  const [keyword, setKeyword] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [flag, setFlag] = useState(false)

  const inputKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const keywordSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(keyword)

    let music = MusicKit.getInstance()
    music.api
      .search(keyword, { limit: 20, types: 'artists,songs' })
      .then((datas: any) => {
        setResults(datas.songs.data)
        console.log(datas.songs.data)
        setFlag(true)
      })
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
