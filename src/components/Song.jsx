import React from 'react';

export const Song = ({ fn, song }) => {
    console.log(song);

    const showPlayer = () => {
        fn(song);
    };

    const rowStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #ddd',
    };

    const colStyle = {
        flex: '1',
    };

    const imgStyle = {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '4px',
        marginRight: '10px',
    };

    const buttonStyle = {
        padding: '10px 15px',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
    };

    return (
        <div style={rowStyle}>
            <div style={colStyle}>
                <img 
                    src={song.artworkUrl100} 
                    alt={`Album cover for ${song.trackName} by ${song.artistName}`} 
                    style={imgStyle}
                />
            </div>
            <div style={colStyle}>
                {song.artistName} - {song.trackName}
            </div>
            <div style={colStyle}>
                <button onClick={showPlayer} style={buttonStyle}>
                    Play Song
                </button>
            </div>
        </div>
    );
};
