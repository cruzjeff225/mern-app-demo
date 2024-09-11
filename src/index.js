import { connect } from "mongoose";
import app from "./app.js"
import {connectDB} from "./db.js"

connectDB();
app.listen(3000);
console.log("Server listen on port:", 3000)