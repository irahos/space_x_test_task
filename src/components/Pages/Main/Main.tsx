import { FC, useRef } from 'react';
import { Header } from '../../Header';
import { Banner } from '../../Banner';
import { RocketList } from '../../RocketList';

export const Main: FC = () => {
  const toursRef = useRef<HTMLDivElement>(null);

  const handleArrowClick = () => {
    toursRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header />
      <Banner onArrowClick={handleArrowClick} />
      <div ref={toursRef}>
        <RocketList />
      </div>
    </div>
  );
};
