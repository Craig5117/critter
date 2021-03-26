import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_TAIL } from '../../utils/mutations';
import { QUERY_TAILS, QUERY_ME } from '../../utils/queries';

const TailForm = () => {
  const [tailText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addTail, { error }] = useMutation(ADD_TAIL, {
    update(cache, { data: { addTail } }) {
      // could potentially not exist so wrap in a try...catch
      try {
        // read current cache contents
        const { tails } = cache.readQuery({ query: QUERY_TAILS });

        // prepend the newest thought to the front of the array
        cache.writeQuery({
          query: QUERY_TAILS,
          data: { tails: [addTail, ...tails] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache, appending new thought to the end of the array
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, tails: [...me.tails, addTail] } },
      });
    },
  });
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // add thought to DB
      await addTail({
        variables: { tailText },
      });
      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p
        className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Here's a new thought..."
          value={tailText}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TailForm;