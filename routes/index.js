const Contact = require("../models/contact");

const router = require("express").Router();

router.post("/createContact", async (req, res) => {
  try {
    const { name, age, favoriteFoods } = req.body;
    const contact = await Contact.create({ name, age, favoriteFoods });
    res.status(200).json({ status: true, mes: "Contact has been created", date: contact });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, mes: error });
  }
});

module.exports = router;











module.exports=router