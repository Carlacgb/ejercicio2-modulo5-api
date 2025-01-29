const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());
app.get("/PePitolindo",(request,response) => {
    response.status(200).json({
        name: "Manz",
        life: 99,
        power: 10,
      })
})
app.post("/login",(request,response) => {
    console.log(request.body)
    const user=request.body
    if(user.name == "doctor1" && user.password == "password1") {
        response.status(200).json({
            status: "ok",
          })
    
    }
    else(
        response.status(200).json({
            status: "failed",
          })
    )
    
})

app.use((err, req, res, next) => {
  res.status(err.status).json(err);
});
app.listen(3000, () => console.log('Example app listening on port 3000!'))