const http = require("http");
const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "..", "public");
const basePath = "/appstore/v1";

http.createServer((req, res) => {

    if (!req.url.startsWith(basePath)) {
        res.writeHead(404);
        return res.end("Not found");
    }

    let relativePath = req.url.substring(basePath.length) || "/index.html";
    let filePath = path.join(baseDir, relativePath);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            return res.end("File not found");
        }

        res.writeHead(200);
        res.end(data);
    });

}).listen(8082, () => {
    console.log("Server running at http://localhost:8082/appstore/v1");
});