import React from 'react';

const Footer = () => {
    return (
        <>
            <div style={{ backgroundColor: "#90e568", width: '100%' }}>
                <footer style={{ border: '2px solid black', backgroundColor: "grey", width: '100%', height: "300px", position: 'relative', bottom: '0' }}>
                    <div className="" style={{ height: "250px" }}>
                        <div className="d-flex justify-content-around">
                            <div className="p-2 w-50">
                                <h6 className="text-uppercase fw-bold">Company name</h6>
                                Discover Authentic Flavors and Culinary Excellence
                                At the Chinese Food Center, we invite you to embark on a delightful culinary journey through the rich and diverse flavors of Chinese cuisine, where traditional recipes and modern flair come together to create unforgettable meals.
                            </div>
                            <div className="w-50 p-2 d-flex flex-column">
                                <h6 className="text-uppercase fw-bold">Useful Links</h6>
                                <a className='mb-3 text-info' href="https://www.tripadvisor.com/Restaurants-g304554-c11-zfp16-Mumbai_Maharashtra.html">Tripadvisor</a>
                                <a className='mb-3 text-info' href="https://www.zomato.com/mumbai/best-chinese-restaurants">Zomato</a>
                                <a className='mb-3 text-info' href="https://www.swiggy.com/city/mumbai/chinese-cuisine-restaurants">Swiggy</a>
                            </div>
                            <div className="w-25 p-3 d-flex flex-column">
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <span className='p-2'>+91 9876233454 : Amit Mishra</span>
                                <span className='p-2'>+91 8176233454 : Jaideep Ahlawat</span>
                                <span className='p-2'>+91 7876233454 : Priya Sonan</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2020 Copyright:
                        <a className="text-dark" href="https://mdbootstrap.com/"> FoodCenter.com</a>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;
