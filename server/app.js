import express from "express"
import dotenv from  "dotenv"
dotenv.config();

const app =express();
const port=process.env.PORT

// app.get("/",(req,res)=>{
//     try {
//         res.status(200).json({msg:"hello zohebbbb"})
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg:error})
        
//     }
// })

// app.get("/home",(req,res)=>{
//     try {
//         res.status(200).json({msg:"hello uddin"})
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg:error})
        
//     }
// })
// app.listen(port,()=>{
//     console.log(`server start http://localhost:${port}`);
// })





// //  res.status(200).json({msg:"hello uddin"})

// res.status(200).json({msg:"hello zoheb"})

// res.staus(200).json({msg:"hello zoheb"})

// res.status(200).json({msg:"hello zoheb"})
// res.status(200).json({msgh:""})
// res.status(200).json({msg:""})

// app.get("/",(req,res)=>{
//     try {
//         res.status(200).json({msg:"heloooooooooooo"})
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg:error})
        
//     }
// })


// app.get("/zoheb",(req,res)=>{
//    try {
//      res.status(200).json({msg:"zohebbbbbbbbbbbbbbbbbbbbb"})
    
//    } catch (error) {
//     console.log(error)
//     res.status(500).json({msg:error})
    
    
//    }
// })
// app.listen(port,()=>{
//     console.log(`server start http://localhost:${port}`);
// })


// let a="*"
// app.get("/",(req,res)=>{
//     try {
//         console.log(a);
//         res.status(500).json({msg:"yaa ibadi allazina aaa manu inni ardi wasiya tun fayyaya ya faa badun kullunafsi zaikal tu mauth"})
//         a+="*"
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg:error})
        
//     }
// // })
// // app.listen(port,()=>{
// //     console.log(`server start http://localhost:${port}`);
// // })

// app.get("/",(req,res)=>{
// try {
//        res.status(500).json({msg:"rab mujhe ko bulaega mai kaab be ko dekhuga ga vo din bhi tho aega mai khaab ko dekhuga"})
    
// } catch (error) {
//     console.log(error);
//     res.status(500).json({msg:error})
    
// }
// })
// app.get("/home",(req,res)=>{
//   try {
//       res.status(500).json({msg:"nind se bethar namaz hai "})

    
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({msf:error})
    
//   }
// })
// app.listen(port,()=>{
//     console.log(`goa is on ❌  server is on ✔️http://localhost:${port}`);
// })


app.get("/zone",(req,res)=>{
    try {
        res.status(200).json({msg:"tgbbbbbnmn"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
})
app.listen(port,()=>{
    console.log(`serveer is on hhtp://localhost:${port}`);
})