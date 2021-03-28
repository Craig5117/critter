import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_TAIL } from '../../utils/mutations';
import { QUERY_TAILS, QUERY_ME } from '../../utils/queries';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TailForm = () => {
  const [tailText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addTail, { error }] = useMutation(ADD_TAIL
    , {
    update(cache, { data: { addTail } }) {
      try {
        const { tails }  = cache.readQuery({ query: QUERY_TAILS });
        console.log(tails);
        // cache.writeQuery({
        //   query: QUERY_TAILS,
        //   data: { tails: [addTail, ...tails] },
        // });
      } catch (e) {
        console.error(e);
      }
    },
  }
  );
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
        <Form.Group controlId="exampleForm.ControlTextarea1">
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
        {/* <p
        className={`m-0 ${
          characterCount === 10000 || error ? 'text-error' : ''
        }`}
      >
        Character Count: {characterCount}/10000
        {error && <span className="ml-2">Something went wrong...</span>}
      </p> */}
        <Button className="button" type="submit">
          Wag Your Tail
        </Button>
        </div>
      </Form>
    </div>
  );
};

export default TailForm;
