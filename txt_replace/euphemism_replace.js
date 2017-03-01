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

  v = v.replace(/\bskirmish\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bskirmishes\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bwar\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bwars\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bshock and awe\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bextraordinary rendition\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bcollateral damage\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\benhanced interrogation techniques\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\btargeted killings\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\boverseas contingency operations\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bsurge\b/gi, 'unevenly distributed chaos');

  v = v.replace(/\bwar on terror\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bmajor combat operations\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\basymmetrical warfare\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\binsurgency\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bweapons of mass destruction\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bWMD capability\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bWMD\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bbureaucratic reasons\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bpreponderant power\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\btorture\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bwater-boarding\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bextreme interrogation techniques\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\balternative set of procedures\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\binterrogating terrorists\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bcar bomb\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bcar bombs\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bmissile attacks\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bwidening war\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bintelligence gathering\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bcampaign against militants\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\boperational efforts\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bblack ops\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bvictory\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\blaboratory of terror\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bpetri dish\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\boperational and strategic success\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bstrategic success\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\boperational success\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bmilitary presence\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bhold-fight-disrupt\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bstalemate\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\basymmetric conflicts\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bmajor attacks\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bplausible deniability\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bdrone missile attacks\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bdrone attacks\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bmissile attacks\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bglobal counterinsurgency\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\birregular warfare\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bIW\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bconflict\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\battacks\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bcorruption\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bmilitary action\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bnation building\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bnation-building\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bintense fire\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bactionable intelligence\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bmomentous mission\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bsecuring checkpoints\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bsoft power\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bmore U.S. troops\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bmore troops\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bsmart power\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bhard power\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bcivilian casualities\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bdead civilians\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bair strikes\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bair war\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bwedge\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\binvasive presence\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\btroop levels\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\basymmetrical battle\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bguerrilla warfare\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bdecapitation\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\btheater\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bcounter-insurgency\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bcounterinsurgency\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bcounter-terrorism\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bcounter-radicalization\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bcounterterrorism\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\btransnational issues\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\btransnational threats\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\braid\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\braids\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bterrorism\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bself-inflicted wounds\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bmilitary might\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bradicalization\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\blaw enforcement\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\breligious war\b/gi, 'unevenly distributed chaos');
  v = v.replace(/\bsecurity challenges\b/gi, 'unevenly distributed chaos');

  textNode.nodeValue = v;

}
