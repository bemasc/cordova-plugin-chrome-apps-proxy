// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var Event = require('cordova-plugin-chrome-apps-common.events');
var exec = require('cordova/exec');

exports.settings = {
  get: function(details, callback) {
    exec(callback, callback, 'ChromeProxy', 'get', [details]);
  },
  set: function(details, callback) {
    exec(callback, callback, 'ChromeProxy', 'set', [details]);
  },
  clear: function(details, callback) {
    exec(callback, callback, 'ChromeProxy', 'clear', [details]);
  },
  onChange: new Event('onChange')
};

exports.onProxyError = new Event('onProxyError');
