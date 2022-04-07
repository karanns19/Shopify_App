const { ProductStatus } = require("@shopify/app-bridge/actions/ResourcePicker");

const router = require("express").Router();

router.post("/:id", async (req, res) => {
	try {
		const id = req.params.id;
        const updates = req.body;

        const result = await ProductStatus.findByIdAndUpdate(id,updates);

        res.send(result);
	
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;