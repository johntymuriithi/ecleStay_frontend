
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { getToken } from '../../Services/authService'; 
import ReviewModal from './ReviewModal'; 
import Host from './Host';
import { jwtDecode } from 'jwt-decode';
import { getCurrentUser } from '../../Services/authService';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [showHostReviewModal, setShowHostReviewModal] = useState(false); 
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState(null);
    console.log(jwtDecode)

    

    useEffect(() => {
        
        const userToken = getCurrentUser();
        const decodedToken = jwtDecode(userToken);
        setEmail(decodedToken.data.email)
        const fetchOrders = async (authToken) => {
            try {
                const response = await fetch(`/api/get/guest/bookings`, {
                    headers: {
                        "ngrok-skip-browser-warning": '69420',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authToken}`
                    }
                });

                if (!response.ok) {
                    setLoading(false)
                    throw new Error((await response.json()).message)
                }
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    setLoading(false)
                    const data = await response.json();
                    setOrders(data.data.Bookings || []);
                    console.log(data.data.Bookings);
                    
                } else {
                    const responseText = await response.text();
                    console.error('Response content type:', contentType);
                    console.error('Response text:', responseText);
                    setError('Failed to fetch data: Unexpected content type');
                }
            } catch (error) {
                setError(error.message);
            }
        };

        const authToken = getToken(); 
        if (!authToken) {
            setError('User ID or token is missing');
        } else {
            fetchOrders(authToken);
        }
    }, []);

    const openReviewModal = (order) => {
        setSelectedOrder(order);
        setShowReviewModal(true);
    };

    const closeReviewModal = () => {
        setSelectedOrder(null);
        setShowReviewModal(false);
    };

    const handleReviewSuccess = (order) => {
        setOrders((prevOrders) =>
            prevOrders.map((o) =>
                o.service_id === order.service_id ? { ...o, reviewed: true } : o
            )
        );
        closeReviewModal();
    };

    const openHostReviewModal = (order) => {
        setSelectedOrder(order);
        setShowHostReviewModal(true);
    };

    const closeHostReviewModal = () => {
        setSelectedOrder(null);
        setShowHostReviewModal(false);
    };

    const handleHostReviewSuccess = (order) => {
        setOrders((prevOrders) =>
            prevOrders.map((o) =>
                o.service_id === order.service_id ? { ...o, hostReviewed: true } : o
            )
        );
        closeHostReviewModal();
    };

    if (loading)
        return (
    <div className='flex justify-center items-center h-screen'>
        <p>Please wait</p>
    </div>
    )

    function emailExists(email, reviewss) {
        if (!reviewss) { return false}
        return reviewss.some(review => review.userEmail === email);
        
    }
    console.log(email)


    return (
        <div className="w-full h-full p-4 bg-white  overflow-y:scroll md:pt-32">
             <h1 className="text-2xl font-bold text-center my-8">My Orders and Reviews</h1>
             {orders.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
             {orders.map((order, index) => (
           <div key={`${order.service_id}-${index}`} className="bg-white shadow-md p-4 flex flex-col items-center md:items-start">
             <Link to={`/service/${order.service_id}`}>
            <div className="order-images grid grid-cols-3 gap-2 w-full">
            {order.images.map((image, imageIndex) => (
                <img 
                    key={`${image.image_id}-${imageIndex}`} 
                    src={image.service_image} 
                    alt={`Order Image ${image.image_id}`} 
                    className="w-full h-24 object-cover rounded-lg" 
                />
            ))}
        </div>
        <div className="flex-grow mt-4 w-full">
            <h2 className="text-lg font-semibold">{order.county?.county_name}</h2>
            <h2 className="text-xl font-semibold">{order.service_name}</h2>
            <p className="text-gray-600 mb-2">Price: {order.price} (per {order.pricing_criteria})</p>
            <p className="text-gray-700">{order.description}</p>
        </div>
            </Link>
            <div className="flex justify-between w-full mt-4">
            <button
                onClick={() => openHostReviewModal(order)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-200 mr-2"
                disabled={emailExists(email, order.hosts.hostReviews.reviews)}
                    >
                {emailExists(email, order.hosts.hostReviews.reviews) ? 'Host Reviewed' : 'Review Host'}
                 </button>
            
        
                            <button
                                onClick={() => openReviewModal(order)}
                                className="bg-blue-500 text-white px-4 py-2 mt-4 md:mt-0 rounded-md hover:bg-blue-600"
                                disabled={emailExists(email, order.serviceReviews.reviews)}
                            >
                                {emailExists(email, order.serviceReviews.reviews) ? 'Reviewed' : 'Review'}
                                
                            </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center mt-4">{error && `${error}`}</p>
            )}
            {selectedOrder && (
                   <>
                <ReviewModal
                    show={showReviewModal}
                    onClose={closeReviewModal}
                        onBookingSuccess={() => handleReviewSuccess(selectedOrder)}
                    order={selectedOrder}
                />
                <Host
                show={showHostReviewModal}
                onClose={closeHostReviewModal}
                onReviewSuccess={() => handleHostReviewSuccess(selectedOrder)}
                order={selectedOrder}
            />
        </> 
            )}
        </div>
    );
};

export default Orders;


    

