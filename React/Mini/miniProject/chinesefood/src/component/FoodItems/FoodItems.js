import React, { useEffect, useRef, useState } from 'react'
import FoodCard from '../FoodCard/FoodCard';
import { deletebyId, getAllFood, getFoodByName } from '../../model/http';


function FoodItems() {

    let [fooditem, setfooditem] = useState([]);
    const [errorMessage , setMessage] = useState("");
    let nameNode = useRef();
    // const data = useLoaderData();

    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllFood();
            console.log(res)
            setfooditem(res.data);
        }
        fetchData();

    }, []);

    // useEffect(() => {
    //     // getAllFood();
    // }, [nameNode])
    async function searchFood(ename) {
        console.log("name", ename);
        if (ename && ename.trim() !== "") {
            const data = await getFoodByName(ename);
            console.log(data);
            if (data.length > 0) {
                setfooditem(data);
                setMessage("");
            } else {
                setMessage("NOT FOUND");
            }
        } else {
            setMessage("");
            const res = await getAllFood();
            console.log(res)
            setfooditem(res.data);
        }
        }
    
        
    return (
        <>
            <div className='d-flex'>
                <div
                    style={{
                        backgroundColor: "green",
                        backgroundImage: "url('https://static.wixstatic.com/media/ec8efe_8c9d8305321c4006bb8d55c2c82406c0~mv2.jpg/v1/fill/w_636,h_720,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/ec8efe_8c9d8305321c4006bb8d55c2c82406c0~mv2.jpg')",
                        backgroundSize: 'cover', // Ensures the image covers the entire div
                         // Set a height for the div
                        width: '100%' // Adjust width as needed
                    }}
                >
                      <section className=" container m-2 d-flex justify-content-center" style={{ height: "50px" , width :"500px", backgroundColor : "grey"}}>

                <label className='text-info my-auto h5 m-2'>Food name to search:</label>
                <input
                    type="text"
                    ref={nameNode}
                    className='border-top-0 rounded border border-warning'
                    onChange={() => searchFood(nameNode.current.value)}
                />
                <span className="text-danger text-bold"> {errorMessage}</span>
            </section>

                    <div className='d-flex flex-wrap justify-content-around m-3 g-3 p-3'>
                        {fooditem.map((food1, i) => (
                            <FoodCard key={'f' + i} food={food1} style={{margin : "1100px"}}/>
                        ))}
                    </div>
                </div>
            </div>


        </>
    )

}

export default FoodItems;




//   [
//     {
//         imagePath: "Chicken-soup.jpeg",
//         name: "Chicken Soup",
//         description: "Hearty chicken soup with fresh ingredients.",
//         price: 200.232,
//         rating: 4
//     },
//     {
//         imagePath: "Images/chickenspringroll.jpeg",
//         name: "Chicken Spring Roll",
//         description: "Crispy spring rolls with chicken and vegetables.",
//         price: 190.23,
//         rating: 3
//     },
//     {
//         imagePath: "Images/chineseHamburge.jpeg",
//         name: "Chinese Hamburger",
//         description: "Juicy Chinese-style hamburger with a flavorful patty.",
//         price: 223.232,
//         rating: 4
//     },
//     {
//         imagePath: "Images/dumpling.jpeg",
//         name: "Juicy Dumpling",
//         description: "Hand-made dumplings filled with juicy pork and vegetables, steamed to perfection.",
//         price: 200.232,
//         rating: 4.0
//     },
//     {
//         imagePath: "Images/EggRice.jpeg",
//         name: "Egg Rice",
//         description: "Egg rice with a mix of vegetables and meat.",
//         price: 140.544,
//         rating: 2
//     },
//     {
//         imagePath: "Images/Fried rice.jpeg",
//         name: "Fried Rice",
//         description: "Hearty fried rice with fresh ingredients.",
//         price: 290.10,
//         rating: 3
//     },
//     {
//         imagePath: "./Images/Hot Pot.jpeg",
//         name: "Hot Pot",
//         description: "Hot pot with a variety of meats and vegetables.",
//         price: 300.232,
//         rating: 4
//     },
//     {
//         imagePath: "Images/Kung Pao Chicken.jpeg",
//         name: "Kung Pao Chicken",
//         description: "Spicy Kung Pao chicken with peanuts and vegetables.",
//         price: 455.232,
//         rating: 5
//     },
//     {
//         imagePath: "Images/noodles.jpeg",
//         name: "Noodles",
//         description: "Enjoy our authentic Chinese noodles with a variety of fresh vegetables and savory sauces.",
//         price: 200.232,
//         rating: 3
//     },
//     {
//         imagePath: "Images/Steamed Pork Buns.jpeg",
//         name: "Steamed Pork Buns",
//         description: "Soft steamed buns filled with savory pork.",
//         price: 533.232,
//         rating: 4
//     },
//     {
//         imagePath: "Images/TripleNoodles.jpeg",
//         name: "Triple Noodles",
//         description: "Noodles with a triple mix of vegetables and meat.",
//         price: 345.98,
//         rating: 2
//     },
//     {
//         imagePath: "Images/veg_springroll.jpeg",
//         name: "Veg Spring Roll",
//         description: "Crispy spring rolls with vegetables.",
//         price: 343.434,
//         rating: 5
//     }
// ]

