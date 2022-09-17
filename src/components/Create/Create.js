import React, { Fragment, useState, useContext } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { firebaseContext, AuthContext } from "../../store/Context";
const Create = () => {
  const { firebase } = useContext(firebaseContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const date = new Date();
  const storage = firebase.storage();
  const handleSubmit = (e) => {
    e.preventDefault();
    storage.ref(`/image/${image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {
        console.log(url)
        firebase.firestore().collection("products").add({
          name,
          category,
          price,
          url,
          userId: user.uid,
          createdAt: date.toDateString(),
        });
        navigate('/');
      })
    });
  };

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              id="fname"
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="input"
              type="number"
              id="fname"
              name="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
          </form>
          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ""}
          ></img>
          <form>
            <br />
            <input
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              type="file"
            />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">
              upload and Submit
            </button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};
export default Create;
