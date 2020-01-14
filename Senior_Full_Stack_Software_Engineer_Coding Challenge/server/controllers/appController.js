const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a987d95934c84d12ac11410712e02875');

//fetch all the news sources
sources = (req, res)=>{
	newsapi.v2.sources({
			language: 'en',
			country: 'us'
	}).then(response => {
			res.status(200).json(response);
	}).catch(err=>{
		res.status(400).json({err});
	});
}

//fetch all the top news by sources
topNews = (req, res) =>{
	newsapi.v2.topHeadlines({
		sources: req.params.source,
		language: 'en',
	}).then(response => {
		res.status(200).json(response);
	}).catch(err=>{
		res.status(400).json({err});
	});
}

//fetch all the news by sources
allNews = (req,res)=>{
	newsapi.v2.everything({
		sources: req.params.source,
	}).then(response => {
		res.status(200).json(response);
	}).catch(err=>{
		res.status(400).json({err});
	});
}

module.exports = {
	sources:sources,
	topNews:topNews,
	allNews:allNews
}