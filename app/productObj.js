
//constructor Object
class ProductObj {
    constructor(id, image, name, description, price) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}
//All Objects
const products = [
    new ProductObj(
        0,
        'FeatureItemCard(2).svg',
        'ELLERY X MO CAPSULE 1',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        52.22,
    ),
    new ProductObj(
        1,
        'FeatureItemCard(5).svg',
        'ELLERY X MO CAPSULE 2',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        32.12,
    ),
    new ProductObj(
        2,
        'FeatureItemCard(6).svg',
        'ELLERY X MO CAPSULE 3',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        82.87,
    ),
    new ProductObj(
        3,
        'FeatureItemCard(7).svg',
        'ELLERY X MO CAPSULE 4',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        22.39,
    ),
    new ProductObj(
        4,
        'FeatureItemCard(8).svg',
        'ELLERY X MO CAPSULE 5',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        92.99,
    ),
    new ProductObj(
        5,
        'FeatureItemCard(9).svg',
        'ELLERY X MO CAPSULE 6',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        12.55,
    ),
];

console.log(products)