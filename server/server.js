const express = require("express")
const app = express();
require('dotenv').config();

const port = process.env.PORT;

require("./configs/mongoose.config")

app.use(express.json());
app.use(express.urlencoded({extended:true}));

require("./routes/jokes.routes")(app)


app.listen(port, ()=>console.log('Listen on port: 8000'))