import React, { useEffect, useState } from "react";
import { Search } from "../components/Search";
import { Songs } from "../components/Songs";
import { getSongs } from "../services/api-client";
import { Player } from "../components/Player";

export const SearchPage = () => {
    const [allSongs, setSongs] = useState([]);
    const [flag, setFlag] = useState(false);
    const [currentSong, setCurrentSong] = useState(null);

    const loadSongs = async () => {
        setSongs(await getSongs('Latest Songs'));
    };

    useEffect(() => {
        loadSongs();
    }, []);

    const togglePlayer = (song) => {
        setCurrentSong(song);
        setFlag(true);
    };

    const getArtistName = async (artistName) => {
        console.log('Rec Artist Name', artistName);
        setSongs(await getSongs(artistName));
    };

    const goBack = () => {
        setFlag(false);
        setCurrentSong(null);
    };

    const containerStyle = {
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: '20px auto',
    };

    const jsx = <>
        <Search fn={getArtistName} />
        <Songs fn={togglePlayer} allsongs={allSongs} />
    </>;

    return (
        <div style={containerStyle}>
            <h1 className="alert alert-info text-center">Music Store</h1>
            {flag ? <Player song={currentSong} goBack={goBack} /> : jsx}
        </div>
    );
};
