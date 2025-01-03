import easterCake from "../images/easter-cake.jpg";
import cinnamonRolls from "../images/cinnamon-rolls.jpg";
import redVelvet from "../images/red-velvet.jpg";
import blackBerrySponge from "../images/blackberry-sponge.jpg";
import lemonLoaf from "../images/lemon-loaf.jpg";
import marshmallowTreat from "../images/marshmallow-treat.jpg";
import cherryPie from "../images/cherry-pie.jpg";
import bundtCake from "../images/bundt-cake.jpg";
import cheeseCake from "../images/cheesecake.jpg";
import chocolateBrownies from "../images/chocolate-brownies.jpg";
import macarons from "../images/macarons.jpg";
import fonfettiCake from "../images/fonfetti-cake.jpg";

// Full product data with imported images
const productData = {
  "easter-cake": {
    name: "Easter Cake",
    description: "Delicious chocolate cake made with the finest ingredients.",
    allergens: "Contains nuts, dairy, and gluten.",
    size: "8-inch round",
    price: "$25.00",
    image: easterCake,
  },
  "cinnamon-rolls": {
    name: "Cinnamon Rolls",
    description:
      "Soft and fluffy cinnamon rolls drizzled with cream cheese icing.",
    allergens: "Contains dairy and gluten.",
    size: "Pack of 6",
    price: "$15.00",
    image: cinnamonRolls,
  },
  "red-velvet": {
    name: "Red Velvet Cake",
    description:
      "A delicious red velvet cake with a smooth cream cheese frosting.",
    allergens: "Contains dairy and gluten.",
    size: "8-inch round",
    price: "$30.00",
    image: redVelvet,
  },
  "blackberry-sponge": {
    name: "Blackberry Sponge",
    description: "Light and fluffy sponge cake topped with fresh blackberries.",
    allergens: "Contains eggs and gluten.",
    size: "9-inch round",
    price: "$20.00",
    image: blackBerrySponge,
  },
  "lemon-loaf": {
    name: "Lemon Loaf",
    description: "A zesty lemon loaf with a tangy glaze on top.",
    allergens: "Contains eggs, dairy, and gluten.",
    size: "12-inch loaf",
    price: "$18.00",
    image: lemonLoaf,
  },
  "marshmallow-treat": {
    name: "Marshmallow Treat",
    description: "Sweet and gooey marshmallow treats with a crispy rice base.",
    allergens: "Contains marshmallow and dairy.",
    size: "Pack of 4",
    price: "$12.00",
    image: marshmallowTreat,
  },
  "cherry-pie": {
    name: "Cherry Pie",
    description: "A classic cherry pie with a golden, buttery crust.",
    allergens: "Contains dairy and gluten.",
    size: "10-inch pie",
    price: "$22.00",
    image: cherryPie,
  },
  "bundt-cake": {
    name: "Bundt Cake",
    description: "A moist bundt cake topped with a delicious glaze.",
    allergens: "Contains eggs, dairy, and gluten.",
    size: "9-inch bundt",
    price: "$28.00",
    image: bundtCake,
  },
  cheesecake: {
    name: "Cheesecake",
    description: "A rich and creamy cheesecake with a buttery crust.",
    allergens: "Contains dairy and gluten.",
    size: "9-inch round",
    price: "$35.00",
    image: cheeseCake,
  },
  "chocolate-brownies": {
    name: "Chocolate Brownies",
    description: "Decadent chocolate brownies with a fudgy center.",
    allergens: "Contains dairy, nuts, and gluten.",
    size: "Pack of 9",
    price: "$15.00",
    image: chocolateBrownies,
  },
  macarons: {
    name: "Macarons",
    description:
      "Delicate almond meringue cookies filled with flavorful buttercream.",
    allergens: "Contains nuts and eggs.",
    size: "Pack of 12",
    price: "$18.00",
    image: macarons,
  },
  "fonfetti-cake": {
    name: "Fonfetti Cake",
    description:
      "Funfetti cake loaded with colorful sprinkles and topped with frosting.",
    allergens: "Contains eggs, dairy, and gluten.",
    size: "8-inch round",
    price: "$22.00",
    image: fonfettiCake,
  },
};

export default productData;
