import Product from './Product';
import { DataView } from 'primereact/dataview';

function ProductsList({products}) {

    const itemTemplate = (product) => {
        return <Product product={product}/>;
    }

    return(
        <DataView value={products} itemTemplate={itemTemplate}
        layout="grid" paginator rows={10}/>
    )
}

export default ProductsList;