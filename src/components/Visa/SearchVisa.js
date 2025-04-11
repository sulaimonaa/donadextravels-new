import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Loading';

const SearchVisa = () => {
    const [destinations, setDestinations] = useState([]);
    const [filteredDestinations, setFilteredDestinations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    useEffect (() => {
        const fetchDestinations = async () => {
            try {
                const response = await fetch("https://toogood-1.onrender.com/visa/destinations");
                if (!response.ok) {
                    throw new Error("Failed to fetch visa destinations");
                }
                const data = await response.json();
                setDestinations(data.data);
            } catch (error) {
                setError(error.message);
                navigate(-1);
            } finally {
                setLoading(false);
            }
        };

        fetchDestinations();
    }, [navigate]);

    const handleSearchChange = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = destinations.filter((destination) =>
            destination.destination.toLowerCase().includes(term) ||
            destination.visa_price.toString().includes(term)
        );

        setFilteredDestinations(filtered);
    };

    if (loading) return <Loading message="Loading visa destinations..."/>;
    if (error) return <p className="text-red-500">{error}</p>;
  return (
    <>
    <div className="w-11/12 mx-auto my-4">
                    <input
                        type="text"
                        placeholder="Search visa destinations..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-full bg-gray-100"
                    />
                    
                    {/* Show results only if the user has typed something */}
                    {searchTerm && filteredDestinations.length > 0 ? (
                        filteredDestinations.map((destination, index) => (
                            <div key={index} className="p-4 flex flex-col rounded shadow bg-white mb-4">
                                <div className="font-bold mb-2">{destination.destination}</div>
                                <div className="font-bold mb-2 flex justify-between">
                                    <div>{destination.visa_excerpt}</div>
                                    <div className="flex flex-col">
                                        <div className="text-dark font-bold" style={{fontSize: '0.5rem'}}>available to this passport holders:</div>
                                        <div className="text-secondary" style={{fontSize: '0.7rem', fontStyle: 'italic'}}>{destination.available_country}</div>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between items-center py-2">
                                    <div className="flex flex-col">
                                        <span className="font-italics text-secondary-subtle" style={{fontSize: '0.6rem', fontStyle: 'italic'}}>visa processing fee</span>
                                        <span className="font-bold text-dark" style={{fontSize: '1.1rem'}}> &#x20A6;{Number(destination.visa_price).toLocaleString()}</span>
                                    </div>
                                    <Link to={`/visa/${destination.id}`} className="text-decoration-none">
                                        <div className="border-0 py-2 px-3 fw-bold rounded-full bg-red-500 text-white cursor-pointer" style={{fontSize: '0.8rem'}}>Apply Now</div>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : searchTerm ? (
                        <div className="p-4 text-center">No visa destinations found.</div>
                    ) : null} 
                    {/* Hide everything when searchTerm is empty */}
                </div>
    </>
    
  )
}

export default SearchVisa