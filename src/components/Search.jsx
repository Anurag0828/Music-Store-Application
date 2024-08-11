import React, { useRef } from "react";

export const Search = ({ fn }) => {
  const artist = useRef();

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '4px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <>
      <label style={labelStyle}>Artist name</label>
      <input ref={artist} type="text" style={inputStyle} placeholder="Artists, songs" />
      <button style={buttonStyle} onClick={() => fn(artist.current.value)}>
        Search It
      </button>
    </>
  );
};
