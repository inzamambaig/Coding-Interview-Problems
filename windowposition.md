## Statement of the Problem

There is a component implementation that requires two things:

1. display the actual value of the vertical scroll of the window (window.scrollY)
1. after mounting, asynchronously receive a number and display it

```Javascript
import React, { useState, useEffect } from 'react';

// imitation of a request to the server. just get the number asynchronously
const fetchRandomNumber = () => Promise.resolve(Math.random());

const NumberAndScroll = () => {
  const [number, setNumber] = useState();
  const [scroll, setScroll] = useState();

  useEffect(async () => {
    setNumber(await fetchRandomNumber());

    window.addEventListener('scroll', () => setScroll(window.scrollY));

    return () => window.removeEventListener('scroll', () => setScroll(window.scrollY));
  });

  return (
    <div>
      <div> Number: { number } </div>
      <div> Scroll: { scroll } </div>
    </div>
  )
}
```
