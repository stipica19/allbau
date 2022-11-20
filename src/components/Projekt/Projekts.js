import React, { useState } from 'react';
import './Projekts.css';
import { categoryImage } from '../../data/data-category';
import Modal from '../Modal';
const Projekts = () => {
  const displayPhoto = categoryImage.map((photo, index) => {
    return (
      <>
        <div key={photo._id} className="item">
          <img
            src={photo.backgroundImage}
            alt={photo.subTitle}
            onClick={() => handleClick(photo, index)}
          />
          <p>
            HASHFHSAHFSAHFSAHfsfsafsa
            sahfsahfHASHFHSAHFSAHFSAHfsfsafsa
          </p>
        </div>
      </>
    );
  });

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    console.log('handle click');
    setCurrentIndex(index);
    console.log(item.backgroundImage);

    setClickedImg(item.backgroundImage);
  };

  const handelRotationRight = () => {
    const totalLength = categoryImage.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = categoryImage[0].image;
      //console.log(newUrl);
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = categoryImage.filter((item) => {
      return categoryImage.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = categoryImage.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = categoryImage[totalLength - 1].image;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = categoryImage.filter((item) => {
      return categoryImage.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  return (
    <section className="docs-main gallery">
      <div className="grid-1 container">
        <div className="card flex">
          <h1>ZAUNE</h1>
        </div>
        <div className="card flex">
          <div className="grid-inner">
            <div className="ga">
              <div className="grid-container">{displayPhoto}</div>
            </div>

            <div>
              {clickedImg && (
                <Modal
                  clickedImg={clickedImg}
                  handelRotationRight={handelRotationRight}
                  setClickedImg={setClickedImg}
                  handelRotationLeft={handelRotationLeft}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projekts;
