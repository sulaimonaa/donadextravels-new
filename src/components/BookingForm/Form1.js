import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form1 = () => {
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        tripType: 'one-way',
        adults: 1,
        children: 0,
        infants: 0,
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from: formData.from,
            to: formData.to,
            tripType: formData.tripType,
            adults: formData.adults,
            children: formData.children,
            infants: formData.infants,
            email: formData.email,
            contactNumber: formData.contactNumber,
        };

        emailjs
            .send(
                'service_pgduo9k', 
                'template_o3byu38', 
                templateParams,
                'mSbfOIEj494ygofJt'
            )
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                setSuccessMessage('Booking request submitted successfully!'); // Set success message
                setFormData({
                    from: '',
                    to: '',
                    tripType: 'one-way',
                    adults: 1,
                    children: 0,
                    infants: 0,
                    email: '',
                    contactNumber: ''
                }); // Clear form data
                setTimeout(() => setSuccessMessage(''), 5000);
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                alert('Failed to submit booking request. Please try again later.');
            });
    };

    return (
        <form onSubmit={handleSubmit} className='bg-gray-200/75 rounded-lg p-2 md:p-4'>
            <div className='flex flex-col md:flex-row gap-2 items-center mb-2'>
                <div className='flex flex-col md:flex-row gap-2 mb-2 w-full'>
                    <label className='font-bold'>From:</label>
                    <input
                        type="text"
                        name="from"
                        value={formData.from}
                        onChange={handleInputChange}
                        placeholder="Enter departure location"
                        required
                        className='p-1 rounded-md w-full md:w-64'
                    />
                </div>
                <div className='flex flex-col md:flex-row gap-2 mb-2 w-full'>
                    <label className='font-bold'>To:</label>
                    <input
                        type="text"
                        name="to"
                        value={formData.to}
                        onChange={handleInputChange}
                        placeholder="Enter destination"
                        required
                        className='p-1 rounded-md w-full md:w-48'
                    />
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-2 items-center mb-2'>
                <div className='flex flex-col gap-2 mb-2 w-full'>
                    <label className='font-bold'>Type of Trip:</label>
                    <select
                        name="tripType"
                        value={formData.tripType}
                        onChange={handleInputChange}
                        className='p-1 rounded-md'
                    >
                        <option value="one-way" className='p-1 rounded-md'>One-way</option>
                        <option value="round-trip" className='p-1 rounded-md'>Round-trip</option>
                        <option value="multi-city" className='p-1 rounded-md'>Multi-city</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2 mb-2 w-full'>
                    <label className='font-bold'>Adults:</label>
                    <input
                        type="number"
                        name="adults"
                        value={formData.adults}
                        onChange={handleInputChange}
                        min="1"
                        max="10"
                        required
                        className='p-1 rounded-md'
                    />
                </div>
                <div className='flex flex-col gap-2 mb-2 w-full'>
                    <label className='font-bold'>Children:</label>
                    <input
                        type="number"
                        name="children"
                        value={formData.children}
                        onChange={handleInputChange}
                        min="0"
                        max="10"
                        className='p-1 rounded-md'
                    />
                </div>
                <div className='flex flex-col gap-2 mb-2 w-full'>
                    <label className='font-bold'>Infants:</label>
                    <input
                        type="number"
                        name="infants"
                        value={formData.infants}
                        onChange={handleInputChange}
                        min="0"
                        max="5"
                        className='p-1 rounded-md'
                    />
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-2 items-center mb-2'>
                <div className='flex flex-col gap-2 mb-2 w-full'>
                    <label className='font-bold'>Contact Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className='p-1 rounded-md'
                    />
                </div>
                <div className='flex flex-col gap-2 mb-2 w-full'>
                    <label className='font-bold'>Contact Phone:</label>
                    <input
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        required
                        maxLength="11" 
                        pattern="[0-9]{11}"
                        className='p-1 rounded-md'
                    />
                </div>
            </div>
            <div className='text-center'>
                <button
                    type="submit"
                    className='border-0 py-1 px-3 bg-red-500 rounded-lg text-white'
                >
                    Book Now
                </button>
                {successMessage && (
                    <p className="mt-2 text-green-600">{successMessage}</p>
                )}
            </div>
        </form>
    );
};

export default Form1;
