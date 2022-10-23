import  { getAllProduct } from "../api/product";

const HomePage = {
       async render() {
              const product = (await getAllProduct()).data;
              return `
                     <div class="container mt-5">
                            <div class="row">
                                   ${
                                          product.map((item) => {
                                                 return `
                                                        <div class="col-lg-4">
                                                               <div class="col-sm-12 border border-dark">
                                                                      <a href="/product/${item.id}"><img src="${item.image}" alt=""></a>
                                                                      <p>${item.name}</p>
                                                                      <span>${item.price}</span>
                                                               </div>
                                                        </div>
                                                 `
                                          })
                                   }
                            </div>
                     </div>
              `
       }
}

export default HomePage;