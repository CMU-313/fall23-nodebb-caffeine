__report = {"info":{"file":"src/password.js","fileShort":"src/password.js","fileSafe":"src_password_js","link":"files/src_password_js/index.html"},"complexity":{"methodAggregate":{"cyclomatic":9,"cyclomaticDensity":15.789,"halstead":{"bugs":0.694,"difficulty":25.097,"effort":52254.74,"length":324,"time":2903.041,"vocabulary":86,"volume":2082.11,"operands":{"distinct":67,"total":177,"identifiers":["__stripped__"]},"operators":{"distinct":19,"total":147,"identifiers":["__stripped__"]}},"params":14,"sloc":{"logical":57,"physical":81}},"settings":{"commonjs":true,"forin":false,"logicalor":true,"switchcase":true,"trycatch":false,"newmi":true},"classes":[],"dependencies":[{"line":3,"path":"path","type":"cjs"},{"line":4,"path":"crypto","type":"cjs"},{"line":5,"path":"util","type":"cjs"},{"line":7,"path":"bcryptjs","type":"cjs"},{"line":9,"path":"./meta/debugFork","type":"cjs"},{"line":81,"path":"./promisify","type":"cjs"}],"errors":[],"lineEnd":81,"lineStart":1,"maintainability":74.319,"methods":[{"cyclomatic":1,"cyclomaticDensity":25,"halstead":{"bugs":0.041,"difficulty":3.542,"effort":434.293,"length":30,"time":24.127,"vocabulary":17,"volume":122.624,"operands":{"distinct":12,"total":17,"identifiers":["__stripped__"]},"operators":{"distinct":5,"total":13,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":4,"physical":13},"errors":[],"lineEnd":23,"lineStart":11,"name":"forkChild"},{"cyclomatic":2,"cyclomaticDensity":200,"halstead":{"bugs":0.018,"difficulty":3.333,"effort":177.169,"length":16,"time":9.843,"vocabulary":10,"volume":53.151,"operands":{"distinct":6,"total":10,"identifiers":["__stripped__"]},"operators":{"distinct":4,"total":6,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":1,"physical":3},"errors":[],"lineEnd":16,"lineStart":14,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":50,"halstead":{"bugs":0.01,"difficulty":1.4,"effort":43.233,"length":11,"time":2.402,"vocabulary":7,"volume":30.881,"operands":{"distinct":5,"total":7,"identifiers":["__stripped__"]},"operators":{"distinct":2,"total":4,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":2,"physical":4},"errors":[],"lineEnd":20,"lineStart":17,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":20,"halstead":{"bugs":0.041,"difficulty":4.636,"effort":568.529,"length":30,"time":31.585,"vocabulary":17,"volume":122.624,"operands":{"distinct":11,"total":17,"identifiers":["__stripped__"]},"operators":{"distinct":6,"total":13,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":5,"physical":4},"errors":[],"lineEnd":30,"lineStart":27,"name":"<anonymous>"},{"cyclomatic":3,"cyclomaticDensity":42.857,"halstead":{"bugs":0.06,"difficulty":7.071,"effort":1279.522,"length":40,"time":71.085,"vocabulary":23,"volume":180.942,"operands":{"distinct":14,"total":22,"identifiers":["__stripped__"]},"operators":{"distinct":9,"total":18,"identifiers":["__stripped__"]}},"params":3,"sloc":{"logical":7,"physical":9},"errors":[],"lineEnd":40,"lineStart":32,"name":"<anonymous>"},{"cyclomatic":2,"cyclomaticDensity":50,"halstead":{"bugs":0.024,"difficulty":3.571,"effort":256.069,"length":20,"time":14.226,"vocabulary":12,"volume":71.699,"operands":{"distinct":7,"total":10,"identifiers":["__stripped__"]},"operators":{"distinct":5,"total":10,"identifiers":["__stripped__"]}},"params":0,"sloc":{"logical":4,"physical":7},"errors":[],"lineEnd":49,"lineStart":43,"name":"getFakeHash"},{"cyclomatic":3,"cyclomaticDensity":60,"halstead":{"bugs":0.026,"difficulty":4.643,"effort":366.178,"length":22,"time":20.343,"vocabulary":12,"volume":78.869,"operands":{"distinct":7,"total":13,"identifiers":["__stripped__"]},"operators":{"distinct":5,"total":9,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":5,"physical":7},"errors":[],"lineEnd":58,"lineStart":52,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":12.5,"halstead":{"bugs":0.046,"difficulty":9.563,"effort":1328.936,"length":34,"time":73.83,"vocabulary":17,"volume":138.974,"operands":{"distinct":8,"total":17,"identifiers":["__stripped__"]},"operators":{"distinct":9,"total":17,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":8,"physical":10},"errors":[],"lineEnd":69,"lineStart":60,"name":"tryMethod"},{"cyclomatic":1,"cyclomaticDensity":33.333,"halstead":{"bugs":0.034,"difficulty":4.167,"effort":428.327,"length":27,"time":23.796,"vocabulary":14,"volume":102.799,"operands":{"distinct":9,"total":15,"identifiers":["__stripped__"]},"operators":{"distinct":5,"total":12,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":3,"physical":5},"errors":[],"lineEnd":75,"lineStart":71,"name":"hashPassword"},{"cyclomatic":3,"cyclomaticDensity":300,"halstead":{"bugs":0.023,"difficulty":3.143,"effort":217.45,"length":20,"time":12.081,"vocabulary":11,"volume":69.189,"operands":{"distinct":7,"total":11,"identifiers":["__stripped__"]},"operators":{"distinct":4,"total":9,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":1,"physical":3},"errors":[],"lineEnd":79,"lineStart":77,"name":"compare"}],"methodAverage":{"cyclomatic":1.8,"cyclomaticDensity":79.369,"halstead":{"bugs":0.032,"difficulty":4.507,"effort":509.971,"length":25,"time":28.332,"vocabulary":14,"volume":97.175,"operands":{"distinct":8.6,"total":13.9},"operators":{"distinct":5.4,"total":11.1}},"params":1.4,"sloc":{"logical":4,"physical":6.5}},"module":"src/password.js"},"jshint":{"messages":[{"severity":"error","line":1,"column":1,"message":"Use the function form of \"use strict\".","source":"Use the function form of \"use strict\"."},{"severity":"error","line":3,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":4,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":5,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":7,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":9,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":12,"column":5,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":14,"column":29,"message":"'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":17,"column":27,"message":"'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":25,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":27,"column":21,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":27,"column":31,"message":"Missing name in function declaration.","source":"Missing name in function declaration."},{"severity":"error","line":29,"column":17,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":30,"column":2,"message":"Unnecessary semicolon.","source":"Unnecessary semicolon."},{"severity":"error","line":32,"column":24,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":32,"column":34,"message":"Missing name in function declaration.","source":"Missing name in function declaration."},{"severity":"error","line":33,"column":5,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":33,"column":27,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":39,"column":17,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":40,"column":2,"message":"Unnecessary semicolon.","source":"Unnecessary semicolon."},{"severity":"error","line":42,"column":1,"message":"'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":43,"column":1,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":43,"column":6,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":47,"column":26,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":52,"column":27,"message":"'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":60,"column":1,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":60,"column":6,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":62,"column":9,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":62,"column":29,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":71,"column":1,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":71,"column":6,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":72,"column":5,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":72,"column":23,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":73,"column":5,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":73,"column":23,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":77,"column":1,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":77,"column":6,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":78,"column":17,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":3,"column":14,"message":"'require' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":4,"column":16,"message":"'require' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":5,"column":14,"message":"'require' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":7,"column":16,"message":"'require' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":9,"column":14,"message":"'require' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":81,"column":1,"message":"'require' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":12,"column":34,"message":"'__dirname' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":18,"column":9,"message":"'console' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":27,"column":1,"message":"'exports' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":32,"column":1,"message":"'exports' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":47,"column":27,"message":"'exports' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":81,"column":24,"message":"'exports' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":81,"column":24,"message":"Too many errors. (100% scanned).","source":"Too many errors."}]}}