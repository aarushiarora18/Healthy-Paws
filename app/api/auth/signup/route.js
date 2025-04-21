// //app/api/auth/signup/route.js
// app/api/auth/signup/route.js
import connectDB from "@/lib/config/db";
import User from "@/lib/config/models/userModel";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(req) {
  await connectDB(); // ✅ move connectDB inside
  try {
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // 🔥 Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // ✅ Generate token
    const token = jwt.sign(
      {
        email: newUser.email,
        id: newUser._id,
      },
      process.env.JWT_SECRET, // 👈 environment variable
      { expiresIn: "15d" }
    );

    return NextResponse.json(
      {
        message: "User created successfully",
        token: token,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json(
      { error: "Error in signup route" },
      { status: 500 }
    );
  }
}

// // app/api/auth/signup/route.js
// import connectDB from "@/lib/config/db";
// import User from "@/lib/config/models/userModel";
// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs"; // 👈 Import bcrypt

// connectDB();

// export async function POST(req) {
//   try {
//     const { username, email, password } = await req.json();

//     if (!username || !email || !password) {
//       return NextResponse.json(
//         { error: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return NextResponse.json(
//         { error: "User already exists" },
//         { status: 400 }
//       );
//     }

//     // 🔥 Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword, // Save hashed password
//     });

//     await newUser.save();

//     // ✅ Use environment variable for JWT secret
//     const token = jwt.sign(
//       {
//         email: newUser.email,
//         id: newUser._id,
//       },
//       process.env.JWT_SECRET, // 👈 use a secret from your .env
//       { expiresIn: "15d" }
//     );

//     return NextResponse.json(
//       {
//         message: "User created successfully",
//         token: token,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Signup Error:", error); // 👈 show real error
//     return NextResponse.json(
//       { error: "Error in signup route" },
//       { status: 500 }
//     );
//   }
// }



// // import connectDB from "@/lib/config/db";
// // import User from "@/lib/config/models/userModel";
// // import { NextResponse } from "next/server";
// // import jwt from "jsonwebtoken";


// // connectDB();

// // export async function POST(req) {
// //     try {
// //         const { username, email, password } = await req.json(); 

// //         const existingUser = await User.findOne({email});

// //         if(existingUser){
// //             return NextResponse.json(
// //                 {error: "User already exists"},
// //                 {status: 400})
// //         }

// //         if (!username || !email || !password) {
// //             return NextResponse.json(
// //                 { error: "All fields are required" },
// //                 { status: 400 }
// //             );
// //         }

// //         const newUser = new User({
// //             username,
// //             email,
// //             password,
// //         });

// //         await newUser.save();

// //         const token = jwt.sign({
// //             email: newUser.email,
// //             id: newUser._id,
// //         }, "pprasoon", 
// //             {expiresIn: "15d" }
// //         )

// //         return NextResponse.json(
// //             { 
// //                 message: "User created successfully",
// //                 token: token,
// //             },
// //             { status: 201 }
// //         );
       
        
        
        

// //     } catch (error) {
// //         console.error(error); 
// //         return NextResponse.json(
// //             { error: "Error in signup route" }, 
// //             { status: 500 }
// //         );
// //     }
// // }
