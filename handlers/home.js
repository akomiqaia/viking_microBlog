// const fs = require("fs")
// const path = require("path")

// function homeHandler(req, res) {
  
//   const filePath = path.join(__dirname, "..", "public", "homepage.html")
//   fs.readFile(filePath, (err, file) => {
//     if(err) {
//       console.error(err)
//       // 500 page
//     } else {
//       res.writeHead(200, {"content-type": "text/html"})
//       res.end(file)
//     }
//   })
// }

// module.exports = homeHandler

const model = require("../dbmodel");

function home(request, response) {
  model.getUsers()
  .then(users => {
    const userList = users.map(user => `<li>${user.username}</li>`);
    response.writeHead(200, { "content-type": "text/html" });
    response.end(`<ul>${userList.join("")}</ul>`);
  })
}

module.exports = home