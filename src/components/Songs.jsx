import React from 'react';
import { Song } from './Song';

export const Songs = ({ fn, allsongs }) => {
    console.log('All Songs', allsongs);

    const songListStyle = {
        marginTop: '20px',
    };

    return (
        <div style={songListStyle}>
            {allsongs.map((currentSong, index) => (
                <div key={index}>
                    <Song fn={fn} song={currentSong} />
                </div>
            ))}
        </div>
    );
};
