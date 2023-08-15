import { useContext } from 'react';
import '../App.css';
import { ContextApi } from '../Context/ContextApi';

function Footer() {
    const {handlePagesPrevNext,page,TotalPages} = useContext(ContextApi);

    return (
        <div className='fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300 w-full'>
            <div className='flex text-center justify-around'>
                <div className='flex gap-12'>
                   {
                     (page === 1) ? <button 
                       className='relative opacity-60 text-red-900'
                       >Previous</button> :  

                        <button 
                        className='border-2 border-gray-300 py-1 px-4 rounded-md'
                         onClick={()=>{
                            handlePagesPrevNext(page - 1)
                        }}  >
                            
                            Previous</button>
                    }
                    
                    {
                        (page === TotalPages) ? <button 
                       className='relative opacity-50 text-red-900'
                       >Next</button> : 
                        <button className='border-2 border-gray-300 py-1 px-4 rounded-md'
                         onClick={()=>{
                        handlePagesPrevNext(page + 1)
                        }} 
                        >Next</button>
                    }
                </div>
                <div>
                    <p className='text-sm font-semibold ml-auto'>page {page} of {TotalPages}</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;