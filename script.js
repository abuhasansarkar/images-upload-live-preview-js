let images = [];

const selectAllImages = () => {
  const image = document.getElementById("imgFiles").files;
  // console.log(image);
  for (let i = 0; i < image.length; i++) {
    images.push({
      name: image[i].name,
      url: URL.createObjectURL(image[i]),
      file: image[i],
    });
  }

  document.getElementById("imageShowContainer").innerHTML = showAllImages();
  document.getElementById("smallImage").innerHTML = showAllSmallImg();
};

// Big Images

const showAllImages = () => {
  let image = "";

  images.forEach((imgItem) => {
    image += `<div class="imgBox">
          <img src="${imgItem.url}" alt="img" />
          <button onClick="deleteImg(${images.indexOf(imgItem)})">X</button>
        </div> `;
  });
  return image;
 
};

// Show Small Image
const showAllSmallImg = () => {
  let image = "";

  images.forEach((imgItem) => {
    image += `<div class="imgBox">
          <img src="${imgItem.url}" alt="img" />
        
        </div> `;
  });
  return image;
};

// Delete Image
const deleteImg = (e) => {
  images.splice(e, 1);
  document.getElementById("imageShowContainer").innerHTML = showAllImages();
  document.getElementById("smallImage").innerHTML = showAllSmallImg();
};

