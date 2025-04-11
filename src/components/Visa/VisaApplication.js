import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import emailjs from 'emailjs-com';
import Loading from '../../Loading';
import SuccessMsg from '../../SuccessMsg';

const VisaApplication = () => {
    const { id } = useParams()
    const [visaById, setVisaById] = useState({
        destination: "",
        visa_excerpt: "",
        visa_price: "",
        process_time: "",
        process_type: "",
        available_country: "",
      });
    const [ formData, setFormData ] = useState({
        first_name: "",
        middle_name: "",
        last_name: "",
        phone_number: "",
        contact_email: "",
        date_of_birth: "",
        passport_number: "",
        tracking_id: "",
        data_page: null,
        passport_photograph: null,
        utility_bill: null,
        supporting_document: null,
        other_document: null,
    })
    
    const [ loading, setLoading ] = useState(false);
    const [ loadingPage, setLoadingPage ] = useState(true);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (!id) return;
        const fetchVisaById = async () => {
            try {
                const response = await fetch(`https://toogood-1.onrender.com/visa/destinations/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch visa destinations");
                }
                const data = await response.json();
                setVisaById(data);
            } catch (error) {
                console.log(error.message)
            }
            finally {
                setLoadingPage(false);
            }
        }

        fetchVisaById()
    }, [id])

    const handleChange = (e) => {
        const { name, type, value, files } = e.target;
    
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "file" ? (files.length > 0 ? files[0] : null) :
                type === "number" ? (value === "" ? "" : Number(value)) : 
                value,
        }));
    };
    

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        const uploadData = new FormData();
        uploadData.append('files[]', formData.data_page);
        uploadData.append('files[]', formData.passport_photograph);
        if (formData.utility_bill) uploadData.append('files[]', formData.utility_bill);
        if (formData.supporting_document) uploadData.append('files[]', formData.supporting_document);
        if (formData.other_document) uploadData.append('files[]', formData.other_document);
    
        try {
            const res = await fetch('https://travel.donadextechnology.com/upload.php', {
                method: 'POST',
                body: uploadData,
            });
    
            const { fileUrls } = await res.json();
    
            const templateParams = {
                first_name: formData.first_name,
                last_name: formData.last_name,
                middle_name: formData.middle_name,
                phone_number: formData.phone_number,
                contact_email: formData.contact_email,
                date_of_birth: formData.date_of_birth,
                passport_number: formData.passport_number,
                visa_destination: visaById.destination,
                visa_fee: visaById.visa_price,
                process_time: visaById.process_time,
                process_type: visaById.process_type,
                data_page: fileUrls[0] || '',
                passport_photograph: fileUrls[1] || '',
                utility_bill: fileUrls[2] || '',
                supporting_document: fileUrls[3] || '',
                other_document: fileUrls[4] || '',
            };
    
            await emailjs.send(
                'service_6i3mqxq',
                'template_nwxc2em',
                templateParams,
                'mSbfOIEj494ygofJt'
            );
    
            setSuccessMessage('Your visa request was added successfully!');
            setFormData({
                first_name: '', last_name: '', middle_name: '',
                phone_number: '', contact_email: '', date_of_birth: '',
                passport_number: '', data_page: '', passport_photograph: '',
                utility_bill: '', supporting_document: '', other_document: ''
            });
    
        } catch (err) {
            console.error(err);
            alert('Something went wrong!');
        } finally {
            setLoading(false);
        }
    };
    
    
    if (loadingPage) return <Loading message="Fetching application form..."/>;

  return (
    <>
        {loading && <Loading message='Submitting visa application...'/>}
        {successMessage && <SuccessMsg message='Your visa application is successful' />}
        {!successMessage && (
        <div className='w-11/12 mx-auto my-4'>
        <div className='h-[25px]'></div>
        <h4>Visa Destination: {visaById.destination}</h4>
        <h5>Visa Entry: {visaById.visa_excerpt}</h5>
        <h5 className='mb-2'>Processing Fee: &#x20A6;{Number(visaById.visa_price).toLocaleString()}</h5>
        <h5 className='mb-2'>Processing Time: {visaById.process_time}</h5>
        <h5 className='mb-2'>Processing Type: {visaById.process_type}</h5>
        <h6 className='mb-2 fw-bold' style={{fontStyle: 'italic'}}>Only Available To: {visaById.available_country}</h6>
        <p className='p-4 bg-gray-200 rounded'>{visaById.visa_description}</p>
        <div className='spacer'></div>
        <h6 className='text-gray-600 mb-3'>Complete the form below with valid information.</h6>
        <form style={{fontSize: '0.8rem'}} onSubmit={handleSubmit}>
            <div className='md:flex mb-3 bg-white rounded shadow'>
                <div className='col-12 md:basis-1/3 flex flex-col gap-1 py-4 px-2'>
                    <label>First Name</label>
                    <input name='first_name' value={formData.first_name} type='text' onChange={handleChange} className='p-2 rounded bg-gray-100 border-0' required/>
                </div>
                <div className='col-12 md:basis-1/3 flex flex-col gap-1 py-4 px-2'>
                    <label>Middle Name</label>
                    <input name='middle_name' value={formData.middle_name} type='text' onChange={handleChange} className='p-2 rounded bg-gray-100 border-0'/>
                </div>
                <div className='col-12 md:basis-1/3 flex flex-col gap-1 py-4 px-2'>
                    <label>Last Name</label>
                    <input name='last_name' value={formData.last_name} type='text' onChange={handleChange} className='p-2 rounded bg-gray-100 border-0' required/>
                </div>
            </div>
            <div className='md:flex mb-3 bg-white rounded shadow'>
                <div className='col-12 md:basis-1/3 flex flex-col gap-1 py-4 px-2'>
                    <label>Phone Number</label>
                    <input name='phone_number' value={formData.phone_number} type='text' onChange={handleChange} className='p-2 rounded bg-gray-100 border-0' required/>
                </div>
                <div className='col-12 md:basis-1/3 flex flex-col gap-1 py-4 px-2'>
                    <label>Contact Email</label>
                    <input name='contact_email' value={formData.contact_email} type='email' onChange={handleChange} className='p-2 rounded bg-gray-100 border-0' required/>
                </div>
                <div className='col-12 md:basis-1/3 flex flex-col gap-1 py-4 px-2'>
                    <label>Date of Birth</label>
                    <input name='date_of_birth' value={formData.date_of_birth} type='date' onChange={handleChange} className='p-2 rounded bg-gray-100 border-0' required/>
                </div>
            </div>
            <div className='md:flex mb-3 bg-white rounded shadow'>
                <div className='col-12 md:basis-1/3 flex flex-col gap-1 py-4 px-2'>
                    <label>Passport Number</label>
                    <input name='passport_number' value={formData.passport_number} type='text' onChange={handleChange} className='p-2 rounded bg-gray-100 border-0 w-full' required/>
                </div>
                <div className='col-12 md:basis-1/3 flex flex-col gap-1 py-4 px-2'>
                    <label>Upload Data Page</label>
                    <input name='data_page' type='file' onChange={handleChange} className='p-2 rounded bg-gray-100 border-0 w-full' required/>
                </div>
                <div className='col-12 md:basis-1/3 flex flex-col gap-1 py-4 px-2'>
                    <label>Upload Passport Photo</label>
                    <input name='passport_photograph' type='file' onChange={handleChange} className='p-2 rounded bg-gray-100 border-0 w-full' required/>
                </div>
            </div>
            <div className='md:flex mb-4 bg-white rounded shadow'>
                <div className='col-12 md:basis-1/3 flex flex-col gap-1 py-4 px-2'>
                    <label>Bank Statement</label>
                    <input name='utility_bill' type='file' onChange={handleChange} className='p-2 rounded bg-gray-100 border-0 w-full' />
                </div>
                <div className='col-12 md:basis-1/3 flex flex-col gap-1 py-4 px-2'>
                    <label>Supporting Document - Insurance</label>
                    <input name='supporting_document' type='file' onChange={handleChange} className='p-2 rounded bg-gray-100 border-0 w-full' />
                </div>
                <div className='col-12 md:basis-1/3 flex flex-col gap-1 py-4 px-2'>
                    <label>Other Document</label>
                    <input name='other_document' type='file' onChange={handleChange} className='p-2 rounded bg-gray-100 border-0 w-full' />
                </div>
            </div>
            <input type='hidden' name='visa_destination' value={visaById.destination} />
            <input type='hidden' name='visa_fee' value={visaById.visa_price} />
            <input type='hidden' name='process_time' value={visaById.process_time} />
            <input type='hidden' name='process_type' value={visaById.process_type} />
            <input type='submit' disabled={loading} className='p-2 md:px-4 rounded-full bg-red-600 text-white font-bold border-0 cursor' value='Complete Application & Proceed to Payment' style={{fontSize: '0.8rem'}}/>
        </form>
        <div className='spacer'></div>
        <div>
            <button onClick={() => navigate(-1)} className="p-2 rounded bg-gray-200 font-bold">Go Back</button> 
        </div>
        <div className='spacer'></div>
        </div>
        )}
    </>
    
  )
}

export default VisaApplication