#!/usr/bin/env node

var util = require("util"),
    mediainfo = require("./");

mediainfo("samples/SD-IMX50.mov", "samples/SD-MPEG.mpeg", "samples/SD-MPEG-2.mpeg", "samples/SD-PRORES-BAD-VIDEO.mov")
    .then(function (res) {
        console.log(util.inspect(res, null, null, true));
    }).catch(function (err) {
        console.error(err);
    });
