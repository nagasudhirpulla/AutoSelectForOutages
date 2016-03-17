// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  //UNCOMMENT TO ACTIVATE BUTTON CLICK FUNCTIONALITY
  /*
  console.log("Auto Selecting...");
  chrome.tabs.executeScript(null, {"file": "injectButtons.js"});
  chrome.tabs.executeScript(null, {"code": "onloadFunction()"});
  */
});
