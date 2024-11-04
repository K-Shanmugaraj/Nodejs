const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const blog = require('./blogExpress');

app.get("/getAllBlogPosts", blog.readAllBlogPosts);

app.get("/getSpecificBlogPosts", blog.readSpecificBlogPost);

app.post("/createBlogPost", blog.createBlogPost);

app.put("/updateBlogPost", blog.updateBlogPost);

app.use("/*", (req, res) => {
    res.send("No routes match found!");
});

app.listen(4000, () => console.log('Server running on port : 4000'));


// const express= require('express');
// const app=express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// // app.get("/",(req,res)=>
// //     {  let qry= req.query
// //         res.send(QuereyString : ${qry.id}, ${qry.name})
        
// //     });
// // app.post("/",(req,res)=>
// //         {  let qry= req.body
// //             res.send(URL ENCODED : ${qry.TITLE}, ${qry.DESC})
            
// //         });
// // app.put("/",(req,res)=>
// //             {  let qry= req.body//JSON
// //                 res.send(URL ENCODED : ${qry.TITLE}, ${qry.DESC})
                
// //             });
// const BlogRoutes= require("./routes/blogRoutes")
// app.use("/api/v1/blog",BlogRoutes)
    
// // app.use("/*",(res)=>
// //     { 
// //         res.send("No routes found");
// //     });
  
// app.listen(4000, () => console.log("Server has started in port: 4000"))