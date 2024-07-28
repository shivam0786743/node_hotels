const express = require("express");
const router = express.Router();
const menuitem = require("./../models/menuitem");
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newmenu = new menuitem(data);
    const ans = await newmenu.save();
    console.log("menu is saved");
    res.send(200).json(ans);
  } catch (error) {
    console.log(error);
    res.send(500).json({
      error: "here is neywork error",
    });
  }
});
router.get("/", async (req,res)=>{
try{
    const data= await menuitem.find();
    console.log("data is fatched");
    res.send(data);

}
catch(err){
    console.log("server error");
    res.status(500).json({ error: 'intrnal server error'});

}
})
router.get("/:tastetype",async(req,res)=>{
  try {
    const tastetype = req.params.tastetype; // extract the worktype from url parameter
    if (tastetype=="sweet" || tastetype== "sour" || tastetype =="spice") {
      const response = await menuitem.find({ taste:tastetype });
      console.log("data is saved");
      res.send(response);
    } else {
      res.status(404).json({ error: "not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'intrnal server error'});
  }
})
module.exports= router;