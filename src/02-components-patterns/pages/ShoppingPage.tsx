import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { Product } from "../interfaces/interfaces"
import '../styles/custom-styles.css'

const product: Product = {
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
                {/* Ejemplo con propiedades internas */}
                <ProductCard
                    product={product}
                    className="bg-dark text-white"
                >
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title
                        title="Titulo de prueba"
                        className=" text-bold"
                    />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                <ProductCard
                    product={product}
                    className="bg-dark text-white"
                >
                    <ProductImage className="custom-image" />
                    <ProductTitle className=" text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                {/* Recibiendo styles */}
                <ProductCard
                    product={product}
                    className="bg-dark text-white"
                    style={{
                        backgroundColor: '#70D1F8'
                    }}
                >
                    <ProductImage className="custom-image" />
                    <ProductTitle className=" text-bold" />
                    <ProductButtons className="custom-buttons" style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }}/>
                </ProductCard>
            </div>
        </div>
    )
}
