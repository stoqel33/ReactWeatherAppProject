import React from 'react';
import './Form.css';

const Form = ({ input, change, submit }) => (
  <form
    onClick={submit}
  >
    <input
      type="text"
      placeholder="Wyszukaj"
      value={input}
      onChange={change}
    />
    <button>Szukaj</button>
  </form>
)

export default Form;