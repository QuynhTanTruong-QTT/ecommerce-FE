export interface Product {
  _id: string; // MongoDB ObjectId dạng string
  id: number; // ID dạng số
  title: string;
  slug: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[]; // Mảng chứa URL ảnh
  creationAt: string; // Ngày tạo dạng ISO string
  updatedAt: string; // Ngày cập nhật dạng ISO string
}

//export interface
