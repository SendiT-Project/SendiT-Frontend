import { servicesList } from './ServicesList';

function ServicesCard() {   
  return (
    <>
    <div>
        <h1 className='ml-60 text-2xl font-semibold text-center'>
                <span className='border-b-2 pb-3 text-color-tertiary'> WHAT WE DO </span>
        </h1>
        <div className='mb-5'>
            <h1 className='ml-60 text-6xl font-semibold text-center'>
                <span className='border-b-2 pb-3 '> Your Favourite Parcel</span>
            </h1>
            <h1 className='ml-60 text-6xl font-semibold text-center'>
                <span className='border-b-2 pb-3 '> Delivery Partner </span>
            </h1>
        </div>
    </div>
    <div className='px-2 bg-color-secondary' > 
        <div className=' w-10/12 m-auto justify-between flex flex-row flex-wrap '>  
            {servicesList.map((services,idx)=>(
                <div key={idx} className=" max-w-sm my-8 overflow-hidden shadow-lg p-2">

                    <div className='text-4xl flex justify-start px-4 items-center text-black my-1'>
                        <p className='rounded-full overflow-hidden p-2'> {services.icon} </p>
                    </div>

                    <div className="px-6 py-4 ">
                        <div className="font-bold text-xl mb-2 text-start"> {services.title} </div>
                        <p className="text-gray-700 text-base text-start"> {services.content} </p>
                    </div>   

                </div> 
            ))}
        </div>
    </div>
    </>
  )
}

export default ServicesCard