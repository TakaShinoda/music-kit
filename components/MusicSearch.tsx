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
        // (async () => {
        //     console.log('スタート');
        //     console.log(datas)
        //     await sleep(1000);
        //     console.log('1秒経ってる!')
        //     await setResults(['a'])
        //     await console.log(results)
        //   })();

        setResults(datas.songs.data)
        setFlag(true)
      })
  }

  return (
    <div>
      <form>
        <input type="text" value={keyword} onChange={inputKeyword} />
        <button type="submit" onClick={keywordSearch}>
          検索
        </button>
      </form>

      {flag && (
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  src={results[0].attributes.artwork.url.replace(
                    /({w}|{h})/g,
                    '100'
                  )}
                  alt="artworkUrl"
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={results[1].attributes.artwork.url.replace(
                    /({w}|{h})/g,
                    '100'
                  )}
                  alt="artworkUrl"
                />
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}
