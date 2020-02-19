import React, { FormEvent, FunctionComponent, useState } from 'react';
import { useDebounce } from '../hooks/debounce';
import { useSearchArtist } from '../hooks/search-artist';

export const ArtistList: FunctionComponent = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value);
  const artists = useSearchArtist(debouncedValue);

  function handleChange(event: FormEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }

  const getArtists = !artists.length ? (
    <div>No artists</div>
  ) : (
    <ul>
      {artists.map((artist: any, index: any) => (
        <li key={index}>{artist}</li>
      ))}
    </ul>
  );

  return (
    <>
      <input value={value} onChange={handleChange} />
      <hr />
      {getArtists}
    </>
  );
};
