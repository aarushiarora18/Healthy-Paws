// //app/api/auth/login/route.js
// app/api/auth/login/route.js
import connectDB from "@/lib/config/db";
import User from "@/lib/config/models/userModel";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"; // <-- IMPORTANT

export async function POST(req) {
    await connectDB(); // <-- connect inside the function
    try {
        const { email, password } = await req.json();
        console.log("Login attempt:", email);

        if (!email || !password) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        // ✅ Compare hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        // ✅ Generate JWT
        const token = jwt.sign(
            {
                email: user.email,
                id: user._id,
            },
            "pprasoon",
            { expiresIn: "15d" }
        );

        return NextResponse.json(
            {
                message: "Login successful",
                token: token,
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Login error", error);
        return NextResponse.json(
            { error: "Error in login route" },
            { status: 500 }
        );
    }
}

// import connectDB from "@/lib/config/db";
// import User from "@/lib/config/models/userModel";
// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";


// connectDB();
// export async function POST(req) {
//     try {
//         console.log("hello")
//         const {email, password} = await req.json();

//         if(!email || !password){
//             return NextResponse.json(
//                 { error: "All fields are required" },
//                 { status: 400 }
//             )
//         }

//         const user = await User.findOne({email});
        
//         if(!user){
//             return NextResponse.json(
//                 {error: "Invalid credentials"},
//                 {status: 401}
//             );
//         }

//         if (user.password !== password){
//             return NextResponse.json(
//                 {error: "Invalid credentials"},
//                 {status: 401}
//             )
//         }

//         const token = jwt.sign({
//             email: user.email,
//             id: user._id,   
//         },"pprasoon",
//     { expiresIn: "15d",}
// )

//         return NextResponse.json({
//             message: "Login successful",
//             token: token
//           },
//         {status: 200}
//         );

//     } catch (error) {
//         console.log("Login error", error);
//         return NextResponse.json(
//             { error: "Error in login route" }, 
//             { status: 500 }
//         );
        
//     }
// }