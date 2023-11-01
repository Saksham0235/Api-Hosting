const Product =require("../models/mproduct")


const getAllProducts = async (req, res) => {
//  This mydata will return promise    
// Product is basically  an imported model which have its methods like find() and other
// IT is fetching data from database

    // .find() Will return all the data and entering data inside parantheses will give accordingly
    // For adding filteration property Or To adding particular searched products-> Req.query
    // Query is a request object Which is populated by request query strings found in url
    //Its always in key value pair  After the question mark ->

    // http://localhost:5000/api/products/testing?rating=4.5 

    // Now We will create a thing that if any of the data in query is empty
    // it will return the whole products if not present
    // if present it will return that result which contain that keyword

  const {company,name,featured,sort,select}=req.query;
  const queryobject={};  

  if(company)
  {
    queryobject.company=company;
  }
// $regex -> It will apply filter to that particular thing
// $options it will tell us that it will be case sensitive ie no diff in small and capital i

  if(name)
  {
    queryobject.name={$regex:name,$options:"i"};
  }
  if(featured)
  {
    queryobject.featured=featured
  }

  let apidata=Product.find(queryobject);



// Applying sort function to query 
  if(sort)
  {
//  As user enter the query in , but in backend it deals with space so we replace , with space    
    let sortfix=sort.split(",").join(" ")
    apidata=apidata.sort(sortfix);
  }

  if(select)
  {
//  As user enter the query in , but in backend it deals with space so we replace , with space    
    // let selectfix=select.replace(","," ")
//  Whenever ","  comes it divides the word from that and after that we join them with a space   
    let selectfix=select.split(",").join(" ")
    apidata=apidata.select(selectfix);
  }

//  Creating Pagination 
  let page = Number(req.query.page) || 1;
  let limit=Number(req.query.limit) || 10;

// Formmula for pagination 
let skip=(page-1)*limit

// .skip Will help us to show number of things on a single page
// And if we go to next page iw till skip the first that things
apidata=apidata.skip(skip).limit(limit);





  console.log(queryobject)
  const Products=await apidata;
// nbhits are Total number of things which will showed at end of results  
  res.status(200).json({ Products,nbHits:Products.length});
};

const getAllProductTesting = async (req, res) => {
//  Adding filteration and Searching functionality with query Props
    const mydata=await Product.find(req.query).select("name company");
    console.log("Req.query data -> ",req.query)
    res.status(200).json({ mydata});
};

module.exports = { getAllProductTesting, getAllProducts };
