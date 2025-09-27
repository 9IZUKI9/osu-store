import { useParams } from 'react-router-dom';
import pages from '../Home/Product/ProductPages';

function ProductPage() {
  const { id } = useParams();
  
  const productComponents = new Map([
    ['1', <pages.Supporter />],
    ['2', <pages.Deskmats />],
  ]);
  
  if (!id || !productComponents.has(id)) {
    return <pages.NotFound />;
  }
  
  return productComponents.get(id);
}

export default ProductPage
