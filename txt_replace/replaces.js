//code from https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js


walk(document.body);

function walk(node) {
  //this function came from: http://is.gd/mwZp7E

  var child, next;
  // if (node.tagName.toLowerCase() == 'input' ||
  //     node.tagName.toLowerCase() == 'textarea' ||
  //     node.classList.contains('ace_editor') < 0) {
  //   return;
  // }

  switch (node.nodeType) {
  case 3: //text node
    handleText(node);
    break;
  case 1: //element
  case 9: //document
  case 11:  //document fragment
    child = node.firstChild;
    while (child) {
      next = child.nextSibling;
      walk(child);
      child = next;
    }
    break;
  
  }

}

function handleText(textNode) {
  var v = textNode.nodeValue;

  v = v.replace(/\bthe\b/g, 'ugh');
  v = v.replace(/\bThe\b/g, 'ugh');
  v = v.replace(/\bTHE\b/g, 'ugh');
  v = v.replace(/\bTrump\b/g, 'Agent Orange DrumpfShape');

  textNode.nodeValue = v;

}
