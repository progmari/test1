import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_STATIONS } from '../../GraphQL/Queries';

const GetStations: React.FC = () => {
  const { loading, data } = useQuery(LOAD_STATIONS);
  // const [stations, setStations] = useState([]);

  // useEffect(() => {
  //   if (data) {
  //     setStations(data.getChargingStations);
  //   }
  // }, [data]);

  return (
    <div>

      {loading && <div>Loading...</div>}
      {!loading && (
        <ul>
          {data.getChargingStations.map((station: any) => (
            <li key={station.id}>
              {station.id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GetStations;
