const News = require("../models/News");

exports.createNews = async (req, res) => {
    try {
       
        const news = new News(req.body);
        await news.save();
        res.send(news);
        
    } catch (error) {
        console.error(error);
        res.status(500).send(error);        
    }
     
}

exports.getNews = async (req, res) => {

    try {

        const news = await News.find();
        res.json(news)
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }

}

exports.getOneNews = async (req, res) => {

    try {
        let oneNews = await News.findById(req.params.id);

        if(!oneNews) {
            res.status(404).json({ msg: 'News not found' })
        }
       
        res.json(oneNews);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.deleteOneNews = async (req, res) => {

    try {
        let oneNews = await News.findById(req.params.id);

        if(!oneNews) {
            res.status(404).json({ msg: 'News not found' })
        }
       
        await News.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'News successfully deleted from the News collection' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}