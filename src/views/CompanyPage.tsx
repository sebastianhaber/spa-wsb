import { useParams } from 'react-router';

type Props = {};

const CompanyPage = (props: Props) => {
  const { id } = useParams();
  return <div>CompanyPage: {id}</div>;
};

export default CompanyPage;
