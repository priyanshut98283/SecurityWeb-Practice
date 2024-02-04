// Using jwtwebtoken and bycrypt -> 
/* 
encryption/decryption/Hashing...

*/

const bcrypt=require("bcryptjs");

const securePassword=async(password)=>{
    // second argument in hash is number of rounds that is 10 at default ,12 for >3 yrs hack,4 rounds for 159 days
    // and so on...
    const hashPassword= await bcrypt.hash(password,10);
    console.log(hashPassword); // $2a$10$deMs6yYYcVij8VNPGOEkB.zjD6gzK7W1cMaaZJLs5aK7bwnBjTMIG

    const res2= await bcrypt.compare(password,hashPassword);
    console.log(res2);

}

securePassword("pt@123");