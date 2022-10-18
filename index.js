const entrypoint = require("./dist").default;
//import entrypoint from "./dist/index"

exports.handler = (event, ctx, callback) =>{
    entrypoint(event, ctx, callback);
};



