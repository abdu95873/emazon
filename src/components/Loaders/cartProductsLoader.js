import { getShoppingCart } from "../../utilities/fakedb";

const cartProductsLoader = async()=>{
const loaderProducts = await fetch('products.json');
const products = await loaderProducts.json();

 const storedCard = getShoppingCart();
 
 const savedCart = [];

for(const id in storedCard){
    const addedProduct = products.find(pd => pd.id === id);
    if(addedProduct){
        const quantity = storedCard[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
    }
}
 console.log(storedCard);


return savedCart;
}
export default cartProductsLoader;