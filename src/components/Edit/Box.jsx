import AdContent from './AdContent'
import BgColor from './BgColor'
import AdCTA from './AdCTA'
import AdImg from './AdImg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'



function Box() {
  return (
    <div className='flex flex-col sm:w-1/2 w-screen'>
      <FontAwesomeIcon icon={faCircleXmark} className = "absolute top-20 right-20 cursor-pointer"/>
      <h1 className='text-center text-lg sm:text-2xl font-bold mt-16'>Ad customization</h1>
      <h2 className='text-center text-sm sm:text-lg mt-2 text-gray-500 text-opacity-70'>Customize your ad and get the templates accordingly</h2>
      <div className='sm:ml-20 ml-10 mt-14'><AdImg/></div> 
      {/* <h3 className='text-center text-sm sm:text-lg mt-10 text-gray-500 text-opacity-70'>Edit Contents</h3>  */}
      <div>
      <div className="flex items-center mt-5 mb-5">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-4 text-gray-400 text-sm">Edit contents</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>
      </div>
      <div className='sm:ml-20 ml-10 mt-10'><AdContent/></div>  
      <div className='sm:ml-20 ml-10 mt-10'><AdCTA/></div>  
      <div className='sm:ml-20 ml-10 mt-10'> <BgColor/></div> 
    </div>
  );
}

export default Box
