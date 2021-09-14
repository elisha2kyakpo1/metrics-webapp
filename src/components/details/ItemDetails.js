import { useSelector } from 'react-redux';

const ItemDetails = () => {
  const country = useSelector((state) => state.MetricsReducer.filter((item) => item.selected));
  console.log(country);
  return (
    <div>
      <h2>hello</h2>
    </div>
  );
};

export default ItemDetails;
