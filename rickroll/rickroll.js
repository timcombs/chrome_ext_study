//code from https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js


/* 
  NOTES:
    document.images is the list of all the images on the document
*/

rickrollAllImg();

function rickrollAllImg() {
  docImgArray = document.images;
  console.log('before', docImgArray);

  for(var i = 0; i < docImgArray.length; i++) {
    docImgArray[i].src = 'http://images.techtimes.com/data/images/full/176327/rick-astley.jpg';
  }
  console.log('after', docImgArray);
}
// walkImgRickrolls(document.body);

// function walkImgRickrolls(node) {
//   //this function came from: http://is.gd/mwZp7E

//   var child, next;

//   switch (node.nodeType) {
//   case 3: //text node
//     handleText(node);
//     break;
//   case 1: //element
//   case 9: //document
//   case 11:  //document fragment
//     child = node.firstChild;
//     while (child) {
//       next = child.nextSibling;
//       walk(child);
//       child = next;
//     }
//     break;
  
//   }

// }

// function handleText(textNode) {
//   var v = textNode.nodeValue;

//   v = v.replace(/\bthe\b/g, 'ugh');
//   v = v.replace(/\bThe\b/g, 'ugh');
//   v = v.replace(/\bTHE\b/g, 'ugh');
//   v = v.replace(/\bTrump\b/g, 'Agent Orange DrumpfShape');

//   textNode.nodeValue = v;

// }