import React, { useState, useEffect } from "react";
import LinkedList from "../structures/LinkedList";

const LinkedListPage = () => {
  const [song, setSong] = useState(null);
  const [list, setList] = useState(null);

  useEffect(() => {
    const songs = new LinkedList();
    songs.insert("Song 1 - Imagine Dragons");
    songs.insert("Song 2 - Coldplay");
    songs.insert("Song 3 - Linkin Park");
    songs.insert("Song 4 - The Weeknd");

    setList(songs);
    setSong(songs.reset());
  }, []);

  const handleNext = () => {
    setSong(list.nextSong());
  };

  const handleReset = () => {
    setSong(list.reset());
  };

  return (
    <div>
      <h2>Linked List - Playlist</h2>
      <p>Now Playing: {song}</p>
      <button onClick={handleNext}>Next Song</button>
      <button onClick={handleReset}>Restart</button>
    </div>
  );
};

export default LinkedListPage;
