import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createObservation } from "../../store/observation";
import Button from "../Elements/Button";

function ObservationForm({ user }) {
  const dispatch = useDispatch();

  const [imageUrl, setImageUrl] = useState("");
  const [imageLoading, setImageLoading] = useState(false);

  const uploadImage = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    setImageLoading(true);
    const res = await fetch("/api/images/", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const data = await res.json();
      setImageUrl(data.url);
      setImageLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const observation = {
      pictureUrl: imageUrl,
      body: "",
      userId: user.id,
    };
    dispatch(createObservation(observation));
  };

  return (
    <form className="flex justify-between my-5" onSubmit={handleSubmit}>
      <input
        type="text"
        name="imgUrl"
        className="w-full md:w-11/12 p-2 mr-3 border-b shadow-sm outline-none focus:border-highlight"
        placeholder="Enter an image URL or upload a local image"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <label
        htmlFor="image-upload"
        className="transition duration-200 mr-2 md:mr-5 px-3 py-1.5 md:px-4 md:py-3 rounded-3xl bg-highlight text-white hover:opacity-50 focus:outline-none"
      >
        Browse
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={(e) => uploadImage(e)}
        style={{ display: "none" }}
        onClick={() => setImageUrl("")}
      />
      {!imageLoading && <Button type="submit" text="Submit" />}
    </form>
  );
}

export default ObservationForm;
