import express from 'express';

const app = express();
app.use(express.json());

//creating objects for fake data
let articleInfo = [
    {
        Article_ID: '1001',
        upvote: 0,
        comments: [],
    },
    {
        Article_ID: '1002',
        upvote: 0,
        comments: [],
    },
    {
        Article_ID: '1003',
        upvote: 0,
        comments: [],
    },
    {
        Article_ID: '1004',
        upvote: 0,
        comments: [],
    },
    {
        Article_ID: '1005',
        upvote: 0,
        comments: [],
    }
]



//creating endpoint for vote updating
app.put('/api/articles/:Article_ID/upvote', (req, res) => {
    const { Article_ID } = req.params;
    const article = articleInfo.find(a => a.Article_ID === Article_ID);
    
    //cheking if article exist
    if(article){
        article.upvote +=1;
        res.send(`The ${Article_ID} article now has ${article.upvote} upvotes`);
    } else {
    //if not exist
        res.send(`The ${Article_ID} article doesn\'t exist`)
    }
})


//Adding endpoint for comments
app.post('/api/articles/:Article_ID/comments', (req, res) => {
    const { Article_ID } = req.params;
    const {postedBy, text } = req.body;
    
    const article = articleInfo.find(a => a.Article_ID === Article_ID);

    //cheking if article exist
    if(article){
        article.comments.push({ postedBy, text});
        res.send(article.comments);
    }else{
        //if not exist
        res.send(`The ${Article_ID} article doesn\'t exist!`)
    }
    


})





app.listen(8000, () => {
    console.log("Server is listening on Port 8000")
})




