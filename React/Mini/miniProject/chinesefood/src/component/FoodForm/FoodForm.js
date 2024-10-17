import { useEffect, useState } from "react";
import { FoodItem } from "../../classes/FoodItem";
import { useLoaderData, useLocation } from "react-router-dom";
import { addFoodItem, updateFoodItem } from "../../model/http";
import { useNavigate } from 'react-router-dom';
import {Button} from '@mui/material'

export function FoodItemForm() {
    const loc = useLocation();
    let nav = useNavigate();
    
    const [active, setActive] = useState(false);
    const { data } = useLoaderData() || {};
    const [foodItem, setFoodItem] = useState(initialFood());
    const categories = ['Appetizer', 'Main Course', 'Dessert', 'Beverage'];
    const [imageBase64, setImageBase64] = useState('');
    const [file, setFile] = useState()
    
    function initialFood() {
        return data ? data : new FoodItem();
    }

    function handleChange(event) {
        const { id, value } = event.target;
                    setFoodItem(prevItem => ({
                ...prevItem,
                [id]: value 
            }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        console.log("file", file)
        
        Object.entries(foodItem).forEach(([key, value]) => {
            formData.append(key, value);
        });
        formData.append('file', file)
        
        if (loc.pathname.includes('addFooditem')) {
            addFood(formData);
        } else {
            updateFood(formData);
        }
    }

    async function addFood(formData) {
        console.log("in add ..food" + formData.get('rating'))

        const data = await addFoodItem(formData);
        if (data) {
            window.alert(`Food item with ID ${formData.get('name')} added successfully...`);
            nav('/foodItems');
        } else {
            window.alert("Something went wrong while adding the food item...");
        }
    }


    async function updateFood(formData) {
        
        const data = await updateFoodItem(formData);
        // if (data) {
            nav("/foodItems");
        // }
    }

    useEffect(() => {
        if (loc.pathname.includes('/addFooditem')) {
            setActive(true);
        }
    }, [loc.pathname]);

    return (
        <>
        <div style={{ backgroundColor: '#f0f0f0' }}>
           <div className="text-center">Food Item Form</div>
            <div className="d-flex justify-content-center bottom-left-0">
                <form className="w-50 p-3" onSubmit={handleSubmit}>

                    {!active && (
                        <div className="mb-3">
                            <label htmlFor="_id" className="form-label">Enter ID</label>
                            <input type="number" id="_id" value={foodItem.id} className="form-control" readonly ={ loc.pathname.includes('/updatefood')} onChange={handleChange} />
                        </div>
                    )}

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Enter Name</label>
                        <input type="text" id="name" value={foodItem.name} className="form-control" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea id="description" value={foodItem.description} className="form-control" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <select id="category" className="form-control" value={foodItem.category} onChange={handleChange}>
                            <option value="">Select Category</option>
                            {categories.map((cat, i) => (
                                <option key={i} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="number" id="price" value={foodItem.price} className="form-control" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity_in_stock" className="form-label">Quantity of Stocks</label>
                        <input type="number" id="quantity_in_stock" value={foodItem.quantity_in_stock} className="form-control" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image_url" className="form-label">Image URL</label>
                       <input id="image"
                        name="image"
                        type="file"
                       className="form-control" onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rating" className="form-label">Rating</label>
                        <input type="text" id="rating" value={foodItem.rating} className="form-control" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="is_available" className="form-label">Is Available</label>
                        <select id="is_available" className="form-control" value={foodItem.is_available} onChange={handleChange}>
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </select>
                    </div>
                    <Button variant="contained" type="submit" className="btn btn-primary">Submit</Button>
                    <Button variant="outlined" type="reset" className="btn btn-secondary" onClick={() => setFoodItem(new FoodItem())}>Reset</Button>
                </form>
            </div>
            </div>
        </>
    );
}

export default FoodItemForm;
