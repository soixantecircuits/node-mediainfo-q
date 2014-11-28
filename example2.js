#!/usr/bin/env node

var util = require("util"),
    mediainfo = require("./");

mediainfo("samples/MY-SD-IMX50.mov", "samples/MY-SD-MPEG.mpeg", "samples/MY-SD-MPEG-2.mpeg", "samples/MY-SD-PRORES-BAD-VIDEO.mov")
    .then(function (res) {
        console.log(util.inspect(res, null, null, true));
    }).catch(function (err) {
        console.error(err);
    });
