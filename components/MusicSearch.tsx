import React, { FC, useState } from 'react'

export const MusicSearch: FC = () => {
  const [keyword, setKeyword] = useState('')
  const [results, setResults] = useState(null)

  const inputKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const keywordSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(keyword)

    let music = MusicKit.getInstance()
    music.api
      .search(keyword, { limit: 10, types: 'artists,albums' })
      .then((results: any) => {
        console.log(results)
        setResults(results)
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
    </div>
  )
}
