
import { useState } from "react";

function HotelForm({ initialData, onSubmit, buttonText }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    latitude: initialData?.latitude || "",
    longitude: initialData?.longitude || "",
    price: initialData?.price || "",
    image: initialData?.image || "",
  });

  const [preview, setPreview] = useState(
    initialData?.image || ""
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData({
        ...formData,
        image: URL.createObjectURL(file),
      });

      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      latitude: Number(formData.latitude),
      longitude: Number(formData.longitude),
      price: Number(formData.price),
    });
  };

  return (
    <form className="hotel-form" onSubmit={handleSubmit}>
      
<label>Hotel Name </label>
<input
  type="text"
  name="title"
  value={formData.title}
  onChange={handleChange}
  required
/>

<label>Description </label>
<textarea
  name="description"
  value={formData.description}
  onChange={handleChange}
  required
/>

<label>Latitude</label>
<input
  type="number"
  step="any"
  name="latitude"
  value={formData.latitude}
  onChange={handleChange}
  required
/>

<label>Longitude </label>
<input
  type="number"
  step="any"
  name="longitude"
  value={formData.longitude}
  onChange={handleChange}
  required
/>

<label>Price </label>
<input
  type="number"
  name="price"
  min="1"
  value={formData.price}
  onChange={handleChange}
  required
/>

<label>
  Hotel Image 
</label>
<input
  type="file"
  accept="image/*"
  onChange={handleImageChange}
  required={!initialData}
/>


      {preview && (
        <img
          src={preview}
          alt="Hotel image preview"
          className="image-preview"
        />
      )}

      <button type="submit">{buttonText}</button>
    </form>
  );
}

export default HotelForm;
