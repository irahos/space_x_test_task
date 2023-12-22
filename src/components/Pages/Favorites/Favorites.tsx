import { FC, useRef } from 'react';
import { Header } from '../../Header';
import { FlightsList } from '../../FlightsList';
import { BannerFavorites } from '../../BannerFavorites';

export const Favorites: FC = () => {
  const toursRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Header />
      <BannerFavorites />
      <div ref={toursRef}>
        <FlightsList />
      </div>
    </div>
  );
};
