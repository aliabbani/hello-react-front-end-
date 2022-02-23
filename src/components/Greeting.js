import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchRequest } from '../redux/reducers/dataReducer';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRequest());
  }, []);

  const greeting = useSelector((state) => state.dataReducer.greeting);
  return (
    <div>
      <h1>{greeting ? greeting.title : 'loading'}</h1>
    </div>
  );
};

export default Greeting;
