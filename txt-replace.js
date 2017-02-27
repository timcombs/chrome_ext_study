//code from https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js


//calls the function walk with the node to start the DOM traversal at 
//document.
walk(document.body);

//this is the function that "walks the DOM"
//node is the starting point
//this function came from: http://is.gd/mwZp7E
function walk(node) {

  //setting variables ("buckets") for the nodes
  var child, next;
  // if (node.tagName.toLowerCase() == 'input' ||
  //     node.tagName.toLowerCase() == 'textarea' ||
  //     node.classList.contains('ace_editor') < 0) {
  //   return;
  // }

 // if then statements
 // if (a condition returns TRUE)
 // then {do a bunch of stuff}

 // switch case statements
 // in a certain case do a bunch of stuff
 // in another case do some more stuff

 // switch is looking for specific nodeTypes
 // do things accordingly
 // NOTE: no break statements for cases 1 & 9
  switch (node.nodeType) {
  //if at text node then call the function to handle the text
  //when done then break out of the switch - case statement
  case 3: //text node
    handleText(node);
    break;
  case 1: //element
  case 9: //document
  //the node is a document fragment then walk those nodes until 
  //you find a text node
  //the meat of the DOM traversal
  case 11:  //document fragment
    child = node.firstChild;
    //this checks to make sure that the node you are currently on
    //ACTUALLY has child node - if so run the code in the while statement
    //if not break;
    while (child) {
      next = child.nextSibling;
      //recursion!!!! yay!!!!!
      //calling this again then traverses to next layer of DOM tree
      //as long as it finds more nodes it will continue
      //when it finds a text node - see case 3 above
      //or no text node eventually breaks
      walk(child);
      child = next;
    }
    break;
  
  }


}

//this is the function that actually replaces the text
//takes the text node and manipulates the text in it
function handleText(textNode) {
  //sets a bucket to value of that node
  //the text to be manipulated
  //that value is a property of that text node

  //review dot notation vs bracket notation
  //basically v is the bucket that holds the ORIGINAL text in a textnode
  var v = textNode.nodeValue;

  //these lines look for a regEx pattern - http://regexr.com/
  //once found then replace that nodeValue with what you want
  //in this case find all instances of the word the
  //NOT the characters 'the' in a word - \b
  v = v.replace(/\bthe\b/g, 'ugh');
  v = v.replace(/\bThe\b/g, 'ugh');
  v = v.replace(/\bTHE\b/g, 'ugh');
  v = v.replace(/\bTrump\b/g, 'Agent Orange DrumpfShape');

  //this is the spot that text node is updated with the new value
  //this the moment the DOM is changed!!!
  textNode.nodeValue = v;

}
