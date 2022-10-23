import Navigo from "navigo";
import HomePage from "./src/pages/home";
import DetailProduct from "./src/pages/detail-product";
import ListProduct from "./src/pages/list-product";
import AddProduct from "./src/pages/add-product";
import UpdateProduct from "./src/pages/update-product";
const router = new Navigo("/", {linksSelector: "a"});
const renderPage = async (content, id) => {
       document.getElementById("app").innerHTML = await content.render(id);
       if(content.afterRender) {
              content.afterRender(id);
       }
}
router.on({
       "/": () => {
              renderPage(HomePage);
       },
       "product/:id": (value) => {
              renderPage(DetailProduct, value.data.id)
       },
       "/admin/list-product": () => {
              renderPage(ListProduct);
       }, 
       "/admin/add-product": () => {
              renderPage(AddProduct);
       },
       "/admin/:id/update-product": (value) => {
              renderPage(UpdateProduct,value.data.id);
       }
});


router.resolve();