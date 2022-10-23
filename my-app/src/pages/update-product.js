import { updateProduct,getOne } from "../api/product";
const AddProduct = {
       async render(id) {
              const product = (await getOne(id)).data;
              return `
                     <div class="container mt-5">
                            <div class="mb-3">
                                   <input type="text" class="form-control p-3" id="name" value="${product.name}" placeholder="Tên sản phẩm">
                                   <span style="color:red" id="name-message"></span>
                            </div>
                            <div class="mb-3">
                                   <input type="text" class="form-control p-3" id="price" value="${product.price}" placeholder="Giá sản phẩm">
                                   <span style="color:red" id="price-message"></span>
                            </div>
                            <div class="mb-3">
                                   <input type="text" class="form-control p-3" id="image" value="${product.image}" placeholder="Link hình ảnh">
                                   <span style="color:red" id="image-message"></span>
                            </div>
                            <div class="mb-3">
                                   <textarea class="form-control p-3" id="description" placeholder="Mô tả">${product.description}</textarea>
                                   <span style="color:red" id="description-message"></span>
                            </div>
                            <div class="mb-3">
                                   <button class="btn btn-success" id="btn">Cap nhat</button>
                            </div>
                     </div>
              `
       },
       afterRender(id) {
              document.getElementById("btn").addEventListener("click", async () => {
                     var result = false;
                     const getIds = ["name", "price", "image", "description"];
                     getIds.map((element) => {
                            const val = document.getElementById(element);
                            const message = document.getElementById(element + "-message");
                            if(val.value === "") {
                                   message.innerHTML = "Trường dữ liệu không được để trống";
                                   result = true;
                            } else {
                                   message. innerHTML = "";
                            }
                     });
                     if(!result) {
                            const data = {
                                   id: id,
                                   name: document.getElementById("name").value,
                                   price: document.getElementById("price").value,
                                   image: document.getElementById("image").value,
                                   description: document.getElementById("description").value
                            };
                            await updateProduct(data);
                            window.location.assign("/admin/list-product");
                     }
              })
       }
}

export default AddProduct;