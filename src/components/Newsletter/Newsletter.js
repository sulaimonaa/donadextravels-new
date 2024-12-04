import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import '../Newsletter/Newsletter.css'

const Newsletter = () => {

    const [formData, setFormData] = useState({
        email: ''
    });

    const [successMessage, setSuccessMessage] = useState(''); 
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
            email: formData.email
        }

        emailjs
            .send(
                'service_6i3mqxq',
                'template_lmp4diy',
                templateParams,
                'mSbfOIEj494ygofJt'
            )
            .then((response) => {
                console.log('Email added successfully!', response.status, response.text);
                setSuccessMessage('New subscriber added successfully!');
                setFormData({
                    email: ''
                })
                setTimeout(() => setSuccessMessage(''), 5000);
            })
            .catch((error) => {
                console.error('Failed to add email:', error);
                alert('Failed to add email. Please try again later.');
            })
            .finally(() => setLoading(false));
    };
    
  return (
    <div className='newsletter-main'>
        <div className='w-11/12 mx-auto'>
            <div className='bg-white rounded-lg md:flex items-center md:h-[220px]'>
                <div className='img_news basis-2/5'>
                </div>
                <div className='news-txt basis-3/5 px-4 pb-4 md:pb-0'>
                    <div className='md:w-96 mx-auto'>
                        <h3 className='font-bold text-2xl md:text-3xl mb-4 text-center md:text-start'>Don't miss a great deal</h3>
                        <p className='mb-4 text-center md:text-start'>Stay one step ahead. Find the best value travel with the latest deals, tips and news.</p>
                        <form onSubmit={handleSubmit}>
                            <div className='flex items-center'>
                                <input type='email'
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required className='p-2 rounded-s bg-gray-100 basis-4/5' placeholder='Enter email address' />
                        <button
                                        type="submit"
                                        className={`p-2 rounded-e text-white border-0 basis-1/5 cursor-pointer ${
                                            loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-900'
                                        }`}
                                        disabled={loading}
                                    >
                                        {loading ? 'Loading...' : 'Subscribe'}
                                    </button>
                            </div>
                            {successMessage && (
                    <p className="mt-2 text-green-600">{successMessage}</p>
                )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter