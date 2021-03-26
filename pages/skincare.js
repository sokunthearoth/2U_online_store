import React, { useState } from 'react';
export default function Skincare(){
    const [count, setCount] = useState(5);
      return (
        <div>
          <p>{count}</p>
          <button onClick={() => setCount(count - 1)}>
            Click me
          </button>
        </div>
      );
    }
