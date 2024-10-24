import { Card } from 'primereact/card';
/*
Imagem.
Nome do produto.
Preço.
Categoria.
 */

/*  <h3>{product.image}</h3>
    <h2>{product.price}</h2>
    <h2>{product.category}</h2>
*/
function Product({product}) {

    const header = (
        <div>
        <h2>{product.title}</h2>       
        </div>
    )

    return(
        <Card title={header} style={{margimBottom: '20px'}}>
            <img src='{product.image}'/>
              
        </Card>
      
    );
}

export default Product;