import { getAllProduct, removeProduct } from "../api/product";
import { reRender } from "../utils/product";
const ListProduct = {
       async render() {
              const product = (await getAllProduct()).data;
              return `
                     <div class="container mt-5">
                            <div class="d-flex justify-content-end">
                                   <a href="/admin/add-product" class="btn btn-success">Them moi</a>
                            </div>
                            <div>
                                   <table class="table table-bordered text-center">
                                          <thead>
                                                 <tr>
                                                        <th>stt</th>
                                                        <th>name</th>
                                                        <th>price</th>
                                                        <th>image</th>
                                                        <th>action</th>
                                                 </tr>
                                          </thead>
                                          <tbody>
                                                 ${
                                                        product.map((item) => {
                                                               return `
                                                                      <tr>
                                                                             <td>${item.id}</td>
                                                                             <td>${item.name}</td>
                                                                             <td>${item.price}</td>
                                                                             <td><img src="${item.image}" width="70px" /></td>
                                                                             <td>
                                                                                    <a href= "/admin/${item.id}/update-product" class="btn btn-info" >Update</a>
                                                                                    <button class="btn btn-danger" data-id=${item.id}>Xoa</button>
                                                                             </td>
                                                                      </tr>
                                                               `
                                                        })
                                                 }
                                          </tbody>
                                   </table>
                            </div>
                     </div>
              `
       },
       afterRender() {
              const getBtn = document.querySelectorAll(".btn-danger");
              for(let btn of getBtn) {
                     const id = btn.dataset.id;
                     btn.addEventListener("click",  async() => {
                            if(btn.classList.contains("btn-danger")) {
                                   const confirm = window.confirm("Ban co muon xoa khong");
                                   if(confirm) {
                                          await removeProduct(id);
                                          reRender("app", ListProduct);
                                   }
                            }
                     })
              }
       }
}

export default ListProduct;