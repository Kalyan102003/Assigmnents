import bodyParser from "body-parser";
import express from "express";
 const app = express();
 app.use(bodyParser.json())
 app.use(express.static("H:/studies/theather project"));
app.listen(5000);
app.get("/",(req,res)=>{
    res.sendFile("H:/studies/theather project/booking.html")
})
