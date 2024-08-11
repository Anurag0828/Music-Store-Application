import React from 'react';

export const Player = ({ song, goBack }) => {
    const playerContainerStyle = {
        backgroundColor: 'black',
        padding: '20px',
        color: 'white',
        borderRadius: '8px',
        textAlign: 'center',
    };

    const buttonStyle = {
        padding: '10px 20px',
        borderRadius: '4px',
        backgroundColor: '#6c757d',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        marginBottom: '20px',
    };

    const imgStyle = {
        maxWidth: '100px',
        borderRadius: '50%',
        marginBottom: '10px',
    };

    return (
        <div style={playerContainerStyle}>
            <button onClick={goBack} style={buttonStyle}>Back</button>
            <div className="artist-info">
                <img 
                    src={song.artworkUrl100} 
                    alt={`Album cover for ${song.trackName} by ${song.artistName}`} 
                    style={imgStyle}
                />
                <h2>{song.artistName}</h2>
                <h3>{song.trackName}</h3>
            </div>
            <audio controls>
                <source src={song.previewUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};
