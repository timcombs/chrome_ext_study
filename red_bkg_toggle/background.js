// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var count = 2;
//called when user clicks on browserAction
chrome.browserAction.onClicked.addListener(function(tab) {
 
  //no tabs or host permissions needed! -- why?
  console.log('Turning ' + tab.url + ' red!');
  console.log('background color', document.body.style.backgroundColor);
  if (count % 2 === 0) {
    chrome.tabs.executeScript({
      code: 'document.body.style.backgroundColor="red"'
    });
  }else{
    chrome.tabs.executeScript({
      code: 'document.body.style.backgroundColor="white"'
    });
  }
  count += 1;
});