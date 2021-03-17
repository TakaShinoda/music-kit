import React, { FC } from 'react'

export const TodaysHit: FC = () => {
  return (
    <div>
      {/* auth */}
      <div>
        <button data-apple-music-authorize>sign in</button>
        <button data-apple-music-unauthorize>sign out</button>
      </div>

      {/* To set a queue using a playlist identifier in the Apple Music API */}
      {/* <button data-apple-music-set-queue="pl.f4d106fed2bd41149aaacabb233eb5eb">
        Today's hits
      </button> */}

      <button data-apple-music-set-queue="pl.043a2c9876114d95a4659988497567be">
        Japan Top 100
      </button>

      {/* Dynamite */}
      {/* <button data-apple-music-set-queue="1528831887">再生</button> */}

      {/* Add Media Playback Controls */}
      <button data-apple-music-pause>pause</button>
      <button data-apple-music-play>play</button>
      <button data-apple-music-skip-to-next-item>next</button>
      <button data-apple-music-skip-to-previous-item>prev</button>

      {/* nowPlayingItem.artworkURL */}
      <p>
        <img
          data-apple-music-now-playing="artworkURL"
          width="300"
          height="300"
        />
      </p>

      {/* Default nowPlayingItem.info */}
      {/* <p data-apple-music-now-playing></p> */}
      <p data-apple-music-now-playing="playlistName"></p>
      <p data-apple-music-now-playing="title"></p>
      <p data-apple-music-now-playing="artistName"></p>

      {/* Add Current Playback Information */}
      {/* 曲時間、再生時間、再生進行状況 */}
      <p>
        曲時間: <time id="apple-music-current-playback-duration"></time>
        <br />
        再生時間: <time id="apple-music-current-playback-time"></time>
        <br />
        進行状況<span id="apple-music-current-playback-progress"></span>
      </p>
    </div>
  )
}
