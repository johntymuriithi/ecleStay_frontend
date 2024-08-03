import React, { useContext} from 'react';
import { ServicesContext } from './ServicesProvider';

function Food() {
  const services = useContext(ServicesContext);

  const getData = async () => {
    console.log(services);
  };

  return (
    <div className="container mx-auto">
      <button onClick={getData}>click me</button>

    </div>
  );
}

export default Food;




