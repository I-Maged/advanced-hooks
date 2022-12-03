import { useRef } from 'react';

function UseRef01() {
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    paraRef.current.innerText = 'Welcome';
    paraRef.current.style.backgroundColor = 'yellow';
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          ref={inputRef}
          className='form-control mb-2'
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
      <p ref={paraRef}>Hello World</p>
    </div>
  );
}

export default UseRef01;
