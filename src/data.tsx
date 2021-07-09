import {Item} from "./types";

const bread: Item = {
    name: "Bread",
    category: "Bakery",
    image: "https://thumbs.dreamstime.com/b/long-loaf-bread-22826883.jpg"
};
const milk: Item = {
    name: "Milk",
    category: "Dairy",
    image: "https://igashop.com.au/wp-content/uploads/2020/05/A2-milk-full-cream.jpg"
};
const eggs: Item = {
    name: "Eggs",
    category: "Fresh",
    image: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/why-are-eggs-good-for-you-1296x728-feature.jpg?w=1155&h=1528"
};

const shoppingList = [bread, eggs, milk];

export default shoppingList;
