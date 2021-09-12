import { gql } from 'apollo-boost';

const getSportList = gql`
  {
    sports {
      id
      name
      description
      image
    }
  }
`;

export { getSportList };
