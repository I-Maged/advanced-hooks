import { useState, useEffect, useRef, useMemo } from 'react';

function UseMemeo01() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(1);
  const renders = useRef(1);

  //   const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prev) => {
      console.log(prev);
      return ++prev;
    });
  };

  return (
    <div>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className='form-control w-25'
      />
      <h2 className='my-1'>
        Sqrt of {number} is {sqrt}
      </h2>

      <button onClick={onClick} className='btn btn-primary my-1'>
        change
      </button>
      <h1>Renders: {renders.current}</h1>
    </div>
  );
}

function getSqrt(num) {
  for (let i = 0; i < 5000; i++) {
    console.log(i);
  }

  console.log('Expensive function call');
  return Math.sqrt(num);
}

export default UseMemeo01;
