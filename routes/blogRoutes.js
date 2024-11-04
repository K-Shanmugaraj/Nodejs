const router = require('express').Router();

const BlogControllers = require('../controllers/blogControllers');

router.get("/getAllBlogPosts", BlogControllers.getAllBlogPosts);
router.get("/getSpecificBlogPosts", BlogControllers.getSpecificBlogPosts);
router.post("/createBlogPost", BlogControllers.createBlogPost);
router.put("/updateBlogPost", BlogControllers.updateBlogPost);
router.delete("/deleteBlogPost/:id", BlogControllers.deleteBlogPost);

module.exports = router;



// const router=require('express').Router()
// router.get("/readAllBlogPosts",(req,res)=>
//         {  let qry= req.query
//             res.send(`QuereyString : ${qry.id}, ${qry.name}`)
            
//         });
//         router.post("/readAllBlogPosts",(req,res)=>
//         {  let qry= req.body
//             res.send(`URL ENCODED : ${qry.TITLE}, ${qry.DESC}`)
            
//         });

//         module.exports = router;