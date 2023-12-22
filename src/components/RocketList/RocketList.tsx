import { FC } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import './RocketList.scss';
import { TourCard } from '../TourCard/TourCard';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Rocket } from '../Types/Rocket';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: Infinity, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const GET_ROCKETS = gql`
  query ExampleQuery {
    rockets {
      id
      description
      name
    }
  }
`;

export const RocketList: FC = () => {
  const { loading, error, data } = useQuery(GET_ROCKETS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className='title'>popular tours</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        className='swiper'
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        {data.rockets.map((rocket: Rocket) => (
          <TourCard rocket={rocket} key={rocket.id} />
        ))}
      </Carousel>
    </div>
  );
};


