## Statement of the Problem

There is a component implementation that requires two things:

1. display the actual value of the vertical scroll of the window (window.scrollY)
1. after mounting, asynchronously receive a number and display it

#### Incorrect Version

```Javascript
import React, { useState, useEffect } from 'react';

const fetchRandomNumber = () => Promise.resolve(Math.random());

const NumberAndScroll = () => {
  const [number, setNumber] = useState();
  // set initial value
  const [scroll, setScroll] = useState(window.scrollY); 
  
  useEffect(() => {
    fetchRandomNumber().then(setNumber);

    const handleScroll = () => setScroll(window.scrollY);
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div>
      <div> Number: { number } </div>
      <div> Scroll: { scroll } </div>
    </div>	
  )
}
```

#### Correct Version

```Javascript

import React, { useState, useEffect } from 'react';

const fetchRandomNumber = () => Promise.resolve(Math.random());

const NumberAndScroll = () => {
  const [number, setNumber] = useState();
  // set initial value
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    fetchRandomNumber().then(setNumber);

    const handleScroll = () => setScroll(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div> Number: { number } </div>
      <div> Scroll: { scroll } </div>
    </div>
  )
}
```
