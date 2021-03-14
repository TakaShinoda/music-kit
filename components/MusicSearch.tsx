import React, { FC, useState } from 'react'

export const MusicSearch: FC = () => {
  const [keyword, setKeyword] = useState('')

  const inputKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const keywordSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(keyword)
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
