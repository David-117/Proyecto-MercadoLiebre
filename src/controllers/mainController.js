const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		// Do the magic
		const visitProducts = products.filter(products => products.category == "visited");
		const saleProducts = products.filter(products => products.category == "in-sale");
		res.render('index', { visitProducts, saleProducts });

		/*
		let visitProducts = products.filter(function(products) {
			return products.category == "visited";
		});
		let saleProducts = products.filter((products) => {
			return products.category == "in-sale";
		});
		res.render('index', {
			visitProducts: visitProducts,
			saleProducts: saleProducts
		});
		*/
	},
	
	search: (req, res) => {
		res.render('results');
		// Do the magic
	},

	login: (req, res) => {
		res.render('login');
	},
	
	register: (req, res) => {
		res.render('register');
	}
};

module.exports = controller;
