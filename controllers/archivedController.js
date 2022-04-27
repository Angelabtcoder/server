const ArchivedNews = require("../models/ArchivedNews");

exports.createArchived = async (req, res) => {
    try {
        
        const archivedNews = new ArchivedNews(req.body);
        await archivedNews.save();
        res.send(archivedNews);
        
    } catch (error) {
        console.error(error);
        res.status(500).send(error);        
    }
     
}

exports.getArchived = async (req, res) => {

    try {

        const archivedNews = await ArchivedNews.find();
        res.json(archivedNews)
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }

}

exports.deleteOneArchived = async (req, res) => {

    try {
        let oneArchived = await ArchivedNews.findById(req.params.id);

        if(!oneArchived) {
            res.status(404).json({ msg: 'Archived news not found' })
        }
       
        await ArchivedNews.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'News successfully deleted from the Archived collection' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}
