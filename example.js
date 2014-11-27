#!/usr/bin/env node

var util = require("util"),
    mediainfo = require("./");

mediainfo("test1.mp3", "test2.mp3")
    .then(function (res) {
        console.log(util.inspect(res, null, null, true));
    }).catch(function (err) {
        console.error(err);
    });