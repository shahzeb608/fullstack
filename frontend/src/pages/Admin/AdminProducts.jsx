import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addProduct, deleteProduct, updateProduct } from "../products/productSlice";

const AdminProducts = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: null,
  });

  const [editMode, setEditMode] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = new FormData();
    for (const key in formData) {
      productData.append(key, formData[key]);
    }

    if (editMode) {
      dispatch(updateProduct({ id: editProductId, productData })); 
      setEditMode(false);
      setEditProductId(null);
    } else {
      dispatch(addProduct(productData)); 
    }

    setFormData({ title: "", description: "", price: "", category: "", stock: "", image: null });
  };

  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(productId));
    }
  };

  const handleEdit = (product) => {
    setEditMode(true);
    setEditProductId(product._id);
    setFormData({
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category,
      stock: product.stock,
      image: null,
    });
  };

  return (
    <div>
      <h2>{editMode ? "Edit Product" : "Add Product"}</h2>

      
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleInputChange} required />
        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleInputChange} required />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleInputChange} required />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleInputChange} required />
        <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleInputChange} required />
        <input type="file" name="image" accept="image/*" onChange={handleFileChange} />
        <button type="submit">{editMode ? "Update Product" : "Add Product"}</button>
      </form>

      {loading && <p>Loading products...</p>}
      {error && <p>Error: {error}</p>}

      
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products && products.length > 0 ? (
            products.map((p) => (
              <tr key={p._id}>
                <td>{p.title}</td>
                <td>${p.price}</td>
                <td>{p.stock}</td>
                <td>
                  <button onClick={() => handleEdit(p)}>Edit</button>
                  <button onClick={() => handleDelete(p._id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No products available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
