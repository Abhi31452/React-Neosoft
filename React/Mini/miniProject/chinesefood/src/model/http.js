
import axios from 'axios';
let baseurl ="http://localhost:4001";

export function getAllFood(){
const data = axios.get(`${baseurl}/getAll`);
return data;
}

export function getById(id){
    console.log(id)
    const data = axios.get(`${baseurl}/getbyId/${id}`)
    return data;

}
export function deletebyId(_id){
    const res = axios.delete(`${baseurl}/deletebyId/${_id}`);
    return res;
}

export async function addFoodItem(formData){
    
return await axios.post(`${baseurl}/addFoodItem` , formData)

}

export async function getFoodByName(foodname){
const response = await axios.get(`${baseurl}/getfname/${foodname}`)
console.log(response)
return response.data;
}

export function updateFoodItem(formData) {
    
    return axios.put(`${baseurl}/updatefood/${formData.get('id')}`, formData)
        .then(response => {
            window.alert(`Succesfully updated data of ${formData.get('name')}`)
            console.log('Update successful:', response.data);
           
            return response.data;
        })
        .catch(error => {
            console.error('Error updating food item:', error);
            throw error;
        });
}
