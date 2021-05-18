
const Planete = require('../models/planete');
const Cart = require('../models/cart');

/** PLANETES */
exports.getPlanetes = (req, res, next) => {

    Planete.fetchAll((planetes) => {
        res.render('./pages/planetes', { planetes  : planetes});
    });
};

/** PLANETE */
exports.getPlanete = (req, res, next) => {
    Planete.findById(req.params.id_planete, planete => {
        res.render('./pages/planete', {planete : planete });
    });
};

/** CART */
exports.getCart = (req, res, next) => {
    Cart.getCart(cart => {
        Planete.fetchAll(products => {
        const cartProducts = [];
        for (product of products) {
          const cartProductData = cart.products.find(
            prod => prod.id === product.id
          );
          if (cartProductData) {
            cartProducts.push({ productData: product, qte:cartProductData.qte });
          }
        }
        res.render('pages/cart', {
          path: '/cart',
          pageTitle: 'Panier',
          products: cartProducts
        });
      });
    });
  };
  
  exports.postCart = (req,res,next)=>{
    const id_planete = req.body.productId;
    Planete.findById(id_planete, product => {
      Cart.addProduct(id_planete, product.price);
    });
    res.redirect('/cart');
  };
  
  exports.postCartDeleteProduct = (req,res,next)=>{
      const id_planete = req.body.productId;
      Planete.findById(id_planete, product => {
            Cart.deleteProduct(id_planete, product.price);
            res.redirect('/cart');
      })
    };