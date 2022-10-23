import { addProduct } from "../api/product";
const AddProduct = {
       async render() {
              return `
                     <div class="container mt-5">
                            <div class="mb-3">
                                   <input type="text" class="form-control p-3" id="name" value="" placeholder="Tên sản phẩm">
                                   <span style="color:red" id="name-message"></span>
                            </div>
                            <div class="mb-3">
                                   <input type="text" class="form-control p-3" id="price" value="" placeholder="Giá sản phẩm">
                                   <span style="color:red" id="price-message"></span>
                            </div>
                            <div class="mb-3">
                                   <input type="text" class="form-control p-3" id="image" value="" placeholder="Link hình ảnh">
                                   <span style="color:red" id="image-message"></span>
                            </div>
                            <div class="mb-3">
                                   <textarea class="form-control p-3" id="description" value="" placeholder="Mô tả"></textarea>
                                   <span style="color:red" id="description-message"></span>
                            </div>
                            <div class="mb-3">
                                   <button class="btn btn-success" id="btn">Thêm mới</button>
                            </div>
                     </div>
              `
       },
       afterRender() {
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
                                   name: document.getElementById("name").value,
                                   price: document.getElementById("price").value,
                                   image: document.getElementById("image").value,
                                   description: document.getElementById("description").value
                            };
                            await addProduct(data);
                            window.location.assign("/admin/list-product");
                     }
              })
       }
}

export default AddProduct;