import { ChangeEvent, FormEvent, useState } from "react";
import { v4 } from "uuid";

import Header from "@/app/(components)/Header";
type ProductFormData = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};

type CreateProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (formData: ProductFormData) => void;
};

const CreateProductModal = ({
  isOpen,
  onClose,
  onCreate,
}: CreateProductModalProps) => {
  const [formData, setFormData] = useState({
    productId: v4(),
    name: "",
    price: 0,
    stockQuantity: 0,
    rating: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "price" || name === "stockQuantity" || name === "rating"
          ? parseFloat(value)
          : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  const labelCssStyle = "block text-sm font-medium text-gray-700";
  const inputCssStyle =
    "mb-2 block w-full rounded-md border-2 border-gray-500 p-2";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-20 h-full w-full overflow-y-auto bg-gray-600 bg-opacity-50">
      <div className="relative top-20 mx-auto w-96 rounded-md border bg-white p-5 shadow-lg">
        <Header name="Create New Product" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="productName" className={labelCssStyle}>
            Product Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
            className={inputCssStyle}
            required
          />
        </form>
      </div>
    </div>
  );
};
export default CreateProductModal;
