//code from https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js


/* 
  NOTES:
    document.images is the list of all the images on the document
*/

//loads all images on page load
rickrollAllImg();

//add listener to document
document.addEventListener('scroll', isScrolledEnough);



//how to get page position?
//what is acceptable distance to scroll?
//might need to have some kind of counter in here
function isScrolledEnough() {
  var yPos = window.scrollY;
  if (yPos > 500) {
    rickrollAllImg();
  }
  //on scroll past a certain height then run rickrollAllImg again

}

function rickrollAllImg() {
  var justImg = '';
  docImgArray = document.images;
  console.log('before', docImgArray);
  
  for (var i = 0; i < docImgArray.length; i++) {
    justImg = justImg + '<br>' + '<img src="' + docImgArray[i].src + '">';
  }

  document.documentElement.innerHTML = justImg;

  console.log('after', docImgArray);
}