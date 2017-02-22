//code from https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js

walkDoubles(document.body);

function walkDoubles(node) {
  var child;
  var next;

}
//this function came from: http://is.gd/mwZp7E
function walk(node) {

  //setting variables ("buckets") for the nodes
  var child, next;
  // if (node.tagName.toLowerCase() == 'input' ||
  //     node.tagName.toLowerCase() == 'textarea' ||
  //     node.classList.contains('ace_editor') < 0) {
  //   return;
  // }
  switch (node.nodetype) {
  case 3:
    handleText(node);
    break;
  case 1: //element - pass thru
  case 9: //document - pass thru
  case 11: //document fragment
    child = node.firstChild;
    while (child) {
      next = child.nextSibling;
      walk(child);
      child = next;
    }
    break;
  }

}

function doubleText(textNode) {
  var txt = textNode.nodeValue;
  console.log(txt);
  txt = txt + txt;

  textNode.nodeValue = txt;

}