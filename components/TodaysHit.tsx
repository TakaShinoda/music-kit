import React, { FC } from 'react'

export const TodaysHit: FC = () => {
  return (
    <div>
      {/* To set a queue using a playlist identifier in the Apple Music API */}
      <button data-apple-music-set-queue="pl.f4d106fed2bd41149aaacabb233eb5eb">
        Today's hits
      </button>

      {/* Dynamite */}
      {/* <button data-apple-music-set-queue="1528831887">再生</button> */}

      {/* Add Media Playback Controls */}
      <button data-apple-music-pause></button>
      <button data-apple-music-play></button>
      <button data-apple-music-skip-to-next-item></button>
      <button data-apple-music-skip-to-previous-item></button>

      {/* nowPlayingItem.artworkURL */}
      <p>
        <img
          data-apple-music-now-playing="artworkURL"
          width="300"
          height="300"
        />
      </p>

      {/* Default nowPlayingItem.info */}
      <p data-apple-music-now-playing></p>

      {/* Add Current Playback Information */}
      <p>
        <time id="apple-music-current-playback-duration"></time>
        <time id="apple-music-current-playback-time"></time>
        <span id="apple-music-current-playback-progress"></span>
      </p>
    </div>
  )
}
