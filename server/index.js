const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

/////////////////////////////////////////////////////////

const { getCompliment, getFortune,  } = require('./controller')

app.get("/api/compliment", getCompliment);

//////////////////////////////////////////////////////// 

app.get("/api/fortune", getFortune);

/////////////////////////////////////////////////////////

const { getAlbums, postAlbum, deleteAlbum, editAlbum  } = require('./controller')

app.get("/api/albums", getAlbums)
app.post("/api/albums", postAlbum)
app.delete("/api/albums/:id", deleteAlbum)
app.put("/api/albums/:id", editAlbum)

/////////////////////////////////////////////////////////

app.listen(4000, () => console.log("Server running on 4000"));

