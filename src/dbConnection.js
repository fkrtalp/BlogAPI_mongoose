"use strict";

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB)
    .then(()=> console.log(' MONGODB CONNECTED'))
    .catch((err) => console.log(' *NOT CONNECTED DB*', err))