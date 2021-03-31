import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT } from '../../utils/mutations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CommentForm = ({ tailId }) => {
  const [commentText, setBody] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, {error}] = useMutation(ADD_COMMENT);
  const handleChange = (event) => {
    if (event.target.value.length <= 3000) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addComment({
        variables: { tailId, commentText },
      });
      setBody('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
     
      <Form
        className="flex-row justify-center justify-space-between-md align-stretch mx-5 mt-2"
        onSubmit={handleFormSubmit}
      >

         
        <textarea
          placeholder="Leave a comment to this tail..."
          value={commentText}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <p className={`m-0 mb-2${characterCount === 3000 || error ? 'text-error' : ''}`}>
        Character Count: {characterCount}/3000
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
        <div className="justify-content-end">
          <Button className="buton mb-5" type="submit">
            Submit
          </Button>
        </div>
      </Form>
  );
};

export default CommentForm;