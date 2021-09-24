import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
  const [response, setResponse] = useState();
  useEffect(() => {
    axios.get(url).then((res) => {
      setResponse(res);
    });
  }, []);

  return [response];
}

export default useFetch;
