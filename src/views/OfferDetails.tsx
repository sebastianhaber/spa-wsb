import { useParams } from 'react-router-dom';

const OfferDetails = () => {
  const { id } = useParams();
  return <div>OfferDetails: {id}</div>;
};

export default OfferDetails;
