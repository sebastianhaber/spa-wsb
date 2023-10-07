import { useQuery } from 'react-query';
import { getAllOffers } from '../api/api.offers';

const OffersPage = () => {
  const { data: offers, isLoading } = useQuery({
    queryKey: 'offers',
    queryFn: getAllOffers,
    refetchOnWindowFocus: false,
  });

  console.log(offers);
  if (isLoading) return <p>ładowniae</p>;
  if (offers?.status === 500) return <p>serwer wylaczony</p>;
  return <div>OffersPage: {offers?.data.length}</div>;
};

export default OffersPage;