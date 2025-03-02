const {Home, Product} = require('../../DB/Schema/homeSchema');

exports.getHomePresetDetails = async(req, res) => {
    try {
        const homeData = await Home.find();
        res.json(homeData);
    } catch (error) {
        console.log("error", error)
    }
}

exports.getProductDetails = async(req, res) => {
    try {
        const queryParams = req.query;
        const productData = await Product.findOne({productId: queryParams?.productId});
        res.json(productData);
    } catch (error) {
        console.log("error", error)
    }
}

exports.getProductList = async(req, res) => {
    try {
        const productList = await Product.find({});
        res.json(productList);
    } catch (error) {
        console.log("error", error)
    }
}

exports.getFilterProperties = async(req, res) => {
    try {
        const productList = await Product.find({});
        let resObj = {
            availableSize: new Set(),
            availableColors: new Set(),
            availableCategories: new Set(),
            gender: new Set(),
            price: [{
                value: 0,
                label: '',
              },
              {
                value: 10000,
                label: '',
              }
            ]
        }

        productList.forEach((item) => {
            item.availableSize.forEach((size) => resObj.availableSize.add(size));
            item.availableColors.forEach((color) => resObj.availableColors.add(color));
            resObj.availableCategories.add(item.category);
            resObj.gender.add(item.gender);
        })

        resObj = {
            availableSize: [...resObj.availableSize],
            availableColors: [...resObj.availableColors],
            availableCategories: [...resObj.availableCategories],
            gender: [...resObj.gender],
            price: resObj.price
        };
        
        res.send(resObj);
    } catch (error) {
        
    }
}