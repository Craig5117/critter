import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_TAIL } from '../../utils/mutations';
import { QUERY_TAILS, QUERY_ME } from '../../utils/queries';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Auth from '../../utils/auth';

const TailForm = () => {
  const userId = Auth.getProfile().data._id;
  const [tailText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addTail, { error }] = useMutation(ADD_TAIL, {
    update(cache, { data: { addTail } }) {
      try {
        const { tails } = cache.readQuery({
          query: QUERY_TAILS,
          variables: { postedBy: userId },
        });
        // console.log('this is tails', tails);
        cache.writeQuery({
          query: QUERY_TAILS,
          data: { tails: [addTail, ...tails] },
          variables: { postedBy: userId },
        });
      } catch (e) {
        console.error(e);
      }

      const { me } = cache.readQuery({ query: QUERY_ME });
      // console.log('this is me', me.tails);
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, tails: [...me.tails, addTail] } },
      });
    },
  });
  const handleChange = (event) => {
    if (event.target.value.length <= 10000) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
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
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="tail-input" className="mb-0">
          <Form.Label>Share your story here.</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Wag your tail..."
            value={tailText}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <p
            className={`mb-3 ${
              characterCount === 10000 || error ? 'text-error' : ''
            }`}
          >
            Character Count: {characterCount}/10000
            {error && <span className="ml-2">Something went wrong...</span>}
          </p>
        </div>
        <div className="d-flex justify-content-end">
          <Button className="button" type="submit">
            Wag Your Tail
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default TailForm;
