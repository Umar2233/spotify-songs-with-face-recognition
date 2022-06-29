import { useEffect, useState } from "react";

function Entertainment({songs}){
  return (
    <>
    <ul>
        {songs.map((song) => {
            return <li><small style={{margin:100}}> {song.track.name} </small><audio style={{margin: 10}} controls src={song.track.preview_url}></audio></li>
        })}
    </ul>
    </>
  )  
}

export default Entertainment