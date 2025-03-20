import { useEffect } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./redux/store/store";
import { getProductsRes } from "./redux/features/productSlice";
import { Product } from "./types/product";
import "./App.css";


function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { listProducts, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(getProductsRes());
  }, [dispatch]);

  console.log('hehe',listProducts)
  

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h2>

      {loading && <p className="text-blue-500">Đang tải...</p>}
      {error && <p className="text-red-500">Lỗi: {error}</p>}
      {listProducts.length === 0 && !loading && <p>Không có sản phẩm nào.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listProducts.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-gray-500 text-sm">{product.description}</p>
            <p className="text-green-500 font-bold mt-2">${product.price}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Mua ngay
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
