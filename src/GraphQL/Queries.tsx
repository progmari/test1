import { gql } from "@apollo/client";

export const LOAD_STATIONS = gql`
query {
    getChargingStations {
      id
      address
      location
      postal
      socketType
      socketNumber
      municipality
    }
  }  
`;
