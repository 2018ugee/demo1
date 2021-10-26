import React, { useEffect, useState } from "react";
import "./box.css";

function Box() {
  const [imgurl, setimgurl] = useState(null);

  useEffect(() => {
    getImage().then((res) => {
      console.log(res);
      setimgurl(res);
    });
  }, []);

  const getImage = async () => {
    const url = "https://dog.ceo/api/breeds/image/random";

    let myurl = null;

    try {
      myurl = await fetch(url);
      myurl = await myurl.json();
      return myurl.message;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="box">
      <img className="boximg" src={imgurl} alt="" />
    </div>
  );
}

export default Box;
