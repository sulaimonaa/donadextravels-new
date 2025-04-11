import React from 'react'
import { IoSearch } from "react-icons/io5";
import { TiWarningOutline } from "react-icons/ti";
import { FaCheck } from "react-icons/fa";

const VisaInfo = () => {
  return (
    <div className="w-11/12 mx-auto mt-4" >
    <h5 className='text-gray-500 mb-4 text-center'>How it works!</h5>
    <div className="py-4 flex gap-4 flex-col md:flex-row col-12 md:justify-center items-start">
                <div className="col-12 md:col-4 flex gap-2 items-center mb-3">
                    <IoSearch className="p-2 rounded-full bg-green-900 text-white" size={30} />
                    <div className="flex flex-col gap-0">
                        <h4 className="font-bold m-0 fs-6">Search</h4>
                        <p className="text-normal m-0 fs-6">Choose available visa, then click apply now</p>
                    </div>
                </div>
                <div className="col-12 md:col-4 flex gap-2 items-center mb-3">
                    <TiWarningOutline className="p-2 rounded-full bg-gray-200 text-dark" size={30} />
                    <div className="flex flex-col gap-0">
                        <h4 className="font-bold m-0 fs-6">Check visa type</h4>
                        <p className="text-normal m-0 fs-6">Find out the type of visa you are applying</p>
                    </div>
                </div>
                <div className="col-12 md:col-4 flex gap-2 items-center mb-3">
                    <FaCheck className="p-2 rounded-full bg-gray-300 text-dark" size={30} />
                    <div className="flex flex-col gap-0">
                        <h4 className="font-bold m-0 fs-6">Apply for the eVisa</h4>
                        <p className="text-normal m-0 fs-6">Apply for the eVisa online</p>
                    </div>
                </div>
            </div>
            </div>
  )
}

export default VisaInfo