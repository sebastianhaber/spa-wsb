import { useParams } from 'react-router';

const CompanyPage = () => {
  const { name } = useParams();
  return <div>CompanyPage: {name}</div>;
};

export default CompanyPage;
