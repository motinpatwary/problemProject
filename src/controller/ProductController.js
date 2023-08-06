

// c = create 

const ProductModel = require("../model/ProductModel");

exports.CreateProduct = (req, res) => {
    const reqbody = req.body;
    ProductModel.create(reqbody)
        .then((data) => {

            res.status(200).json({status: "success", data: data})
        })
        .catch((error) => {

            res.status(500).json({ error: error });
        });

}
// R = Read

exports.ReadProduct = (req, res) => {
    const query = {};
    const projection = "ProductName ProductCode Img UnitPrice Qty TotalPrice"

    ProductModel.find(query, projection, (err, data)=> {
        if(err) {
            res.status(500).json({status: "fail", data: err})
        }
        else {
            console.log(data)
            res.status(200).json({status: "success", data: data})
        }
    })
}



// exports.ReadProduct = (req, res) => {
//     const query = {};
//     const projection = "ProductName ProductCode Img UnitPrice Qty TotalPrice"

//     ProductModel.find(query, projection )
//     .then((data) => {

//         res.status(200).json({status: "success", data: data})
//     })
//     .catch((error) => {

//         res.status(500).json({ error: error });
//     });
// }



// U = Update

exports.UpdateProduct = (req, res) => {
    const id = req.params.id;
    const query = { _id: id }
    const reqBody = req.body;

    ProductModel.updateOne(query, reqBody, (err, data)=> {
        if(err) {
            res.status(500).json({status: "fail", data: err})
        }
        else {
            res.status(200).json({status: "success", data: data})
        }
    })
}





// D = Delete

exports.DeleteProduct = (req, res) => {
    const id = req.params.id;
    const query = { _id: id };

    ProductModel.remove(query, (err, data)=> {
        if(err) {
            res.status(500).json({status: "fail", data: err})
        }
        else {
            res.status(200).json({status: "success", data: data})
        }
    })
}