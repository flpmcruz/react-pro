import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

const product = {
    id: '1',
    title: 'Coffe Mug',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />

            <div style={{
                display: 'flex',
                msFlexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <ProductCard product={product} >
                    <ProductCard.Image />
                    <ProductCard.Title title="Titulo de prueba" />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product} >
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
