
// const mysql = require("mysql2/promise");
// const makeConnection = require("../config/mysqldb");
// const { response } = require("express");


// async function getAllFooditem() {
//     const connection = await makeConnection();
//     // console.log(connection);
//     const [rows] = await connection.query('SELECT * FROM food_items');
//     const food = rows.map(fooditem => {
//         const imageBuffer = fooditem.image_url;
        
//         const base64Image = imageBuffer
//         ? `data:image/png;base64,${imageBuffer.toString('base64')}`
//         : null;
        
//         console.log("image url => ",base64Image )
//         // console.log('--------------------------------------------------------------------------------')
//         return {
//             id: fooditem.id,
//             name: fooditem.name,
//             description: fooditem.description,
//             category : fooditem.category,
//             price: fooditem.price,
//             image_url: base64Image,
//             quantity_in_stock:fooditem.quantity_in_stock,
//             rating: fooditem.rating,
//             is_available:fooditem.is_available


//         };
//     });
//     return food;

// }

// async function addfooditem(user ,file) {
//     const connection = await makeConnection();
//     // console.log(user.quantity_in_stock)
   
//     const query = `
//         INSERT INTO food_items (
//             name, description, category, price, quantity_in_stock, image_url, rating, is_available
//         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
//     const [result] = await connection.query(query, [
//         user.name,
//         user.description,
//         user.category,
//         user.price,
//         user.quantity_in_stock,
//         file,
//         user.rating,
//         user.is_available || 1
//     ]);
//     console.log("..............res..",result)
//     return result;
// }

// async function getbyname(name){
//     const connection = await makeConnection();
//     const result = await connection.query(`select * from food_items where name="${name}"`);
//     return result[0];
// }

// async function getFoodbyId(id)
// {
//     const conn = await makeConnection();
//     const [res] =await conn.query(`select * from food_items where id =${id}`) 
//     return res[0];
// }
// async function deletebyId(id){
// const connection = await makeConnection();
// console.log(id);
// const response = await connection.query(`DELETE FROM food_items WHERE id = ?`, [id])
// // console.log(response);
// return response;
// }

// async function updatebyId(id, food_item, file) {
//     const connection = await makeConnection();

//     // Ensure file is a buffer before using it in the query
//     if (!Buffer.isBuffer(file)) {
//         throw new Error('Provided file is not a buffer');
//     }

//     const query = `
//         UPDATE food_items 
//         SET 
//             name = ?, 
//             description = ?, 
//             category = ?, 
//             price = ?, 
//             quantity_in_stock = ?, 
//             image_url = ?, 
//             rating = ?, 
//             is_available = ? 
//         WHERE id = ?
//     `;

//     // Using parameters to avoid SQL injection and to handle binary data
//     const params = [
//         food_item.name,
//         food_item.description,
//         food_item.category,
//         food_item.price,
//         food_item.quantity_in_stock,
//         file, // This is your buffer
//         food_item.rating,
//         food_item.is_available,
//         id
//     ];

//     // Execute the query with parameters
//     const [response] = await connection.query(query, params);
//     return response[0];
// }


// module.exports = { getAllFooditem, addfooditem ,getFoodbyId ,getbyname ,deletebyId , updatebyId };



const mysql = require("mysql2/promise");
const makeConnection = require("../config/mysqldb");
const { response } = require("express");


async function getAllFooditem() {
    const connection = await makeConnection();
    // console.log(connection);
    const [rows] = await connection.query('SELECT * FROM food_items');
    const food = rows.map(fooditem => {
        const imageBuffer = fooditem.image_url;
        
        const base64Image = imageBuffer
        ? `data:image/png;base64,${imageBuffer.toString('base64')}`
        : null;
        
        console.log("image url => ",base64Image )
        // console.log('--------------------------------------------------------------------------------')
        return {
            id: fooditem.id,
            name: fooditem.name,
            description: fooditem.description,
            category : fooditem.category,
            price: fooditem.price,
            image_url: base64Image,
            quantity_in_stock:fooditem.quantity_in_stock,
            rating: fooditem.rating,
            is_available:fooditem.is_available


        };
    });
    return food;

}

async function getFoodbyId(id)
{
    const conn = await makeConnection();
    const [res] =await conn.query(`select * from food_items where id =${id}`) 
    return res[0];
}

async function addfooditem(user ,file) {
    const connection = await makeConnection();
    // console.log(user.quantity_in_stock)
    let result;
   if(file){
    const query = `
        INSERT INTO food_items (
            name, description, category, price, quantity_in_stock, image_url, rating, is_available
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    [result] = await connection.query(query, [
        user.name,
        user.description,
        user.category,
        user.price,
        user.quantity_in_stock,
        file,
        user.rating,
        user.is_available || 1
    ]);
    }else{
        const query = `
        INSERT INTO food_items (
            name, description, category, price, quantity_in_stock, rating, is_available
        ) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    [result] = await connection.query(query, [
        user.name,
        user.description,
        user.category,
        user.price,
        user.quantity_in_stock,
        user.rating,
        user.is_available || 1
    ]);
    }
    console.log("..............res..",result)
    return result;
}

async function getFoodName(name){
    const connection = await makeConnection();
    const result = await connection.query(`select * from food_items where name like "%${name}%"`);
    console.log( "........................ ", result[0]);
    
    return result[0];
}


async function deletebyId(id){
const connection = await makeConnection();
console.log(id);
const response = await connection.query(`DELETE FROM food_items WHERE id = ?`, [id])
// console.log(response);
return response;
}

async function updatebyId(id, food_item, file) {
    const connection = await makeConnection();

    // Ensure file is a buffer before using it in the query
    // if (!Buffer.isBuffer(file)) {
    //     throw new Error('Provided file is not a buffer');
    // }
    let query ,params;
if(file){
     query = `
        UPDATE food_items 
        SET 
            name = ?, 
            description = ?, 
            category = ?, 
            price = ?, 
            quantity_in_stock = ?, 
            image_url = ?, 
            rating = ?, 
            is_available = ? 
        WHERE id = ?
    `;

    // Using parameters to avoid SQL injection and to handle binary data
    params = [
        food_item.name,
        food_item.description,
        food_item.category,
        food_item.price,
        food_item.quantity_in_stock,
        file, // This is your buffer
        food_item.rating,
        food_item.is_available,
        id
    ];
}else{
        query = `
        UPDATE food_items 
        SET 
            name = ?, 
            description = ?, 
            category = ?, 
            price = ?, 
            quantity_in_stock = ?,  
            rating = ?, 
            is_available = ? 
        WHERE id = ?
    `;

    // Using parameters to avoid SQL injection and to handle binary data
     params = [
        food_item.name,
        food_item.description,
        food_item.category,
        food_item.price,
        food_item.quantity_in_stock,
        food_item.rating,
        food_item.is_available,
        id
    ];

}
    // Execute the query with parameters
    const [response] = await connection.query(query, params);
    return response[0];
}

// async function getFoodName(fname) {
//     const regex = new RegExp(fname, 'i');
//     console.log(fname,regex);

//     const result = await connection.query(`select * from food_items where name like "${fname}"`);
//     return result[0];
// }

module.exports = { getAllFooditem, getFoodbyId,addfooditem  ,getFoodName ,deletebyId , updatebyId };


