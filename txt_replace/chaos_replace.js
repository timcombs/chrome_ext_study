//code from https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js

walk(document.body);

//this DOM walking function came from: http://is.gd/mwZp7E
function walk(node) {
  var child, next;

 // switch is looking for specific nodeTypes
 // NOTE: no break statements for cases 1 & 9
  switch (node.nodeType) {
  case 3: //text node
    handleText(node);
    break;
  case 1: //element
  case 9: //document
  //the meat of the DOM traversal
  case 11:  //document fragment
    child = node.firstChild;
    //recursion!!!! yay!!!!!
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

  v = v.replace(/\bdifficulties\b/g, 'unevenly distributed chaos');
  v = v.replace(/\bwar\b/g, 'unevenly distributed chaos');
  v = v.replace(/\badjustments\b/g, 'unevenly distributed chaos');
  v = v.replace(/\bdifficulties\b/g, 'unevenly distributed chaos');
  v = v.replace(/\bwar\b/g, 'unevenly distributed chaos');
  v = v.replace(/\badjustments\b/g, 'unevenly distributed chaos');
  v = v.replace(/\bdifficulties\b/g, 'unevenly distributed chaos');
  v = v.replace(/\bwar\b/g, 'unevenly distributed chaos');
  v = v.replace(/\badjustments\b/g, 'unevenly distributed chaos');

  textNode.nodeValue = v;

}
