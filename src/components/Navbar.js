import { Link, Outlet, useNavigate} from 'react-router-dom'
import { useSnackbar } from 'notistack';
import Button from './Button';


function Navbar({user,setUser}) {
  const {enqueueSnackbar} = useSnackbar();
  const navigate=useNavigate()

  function handleLogOut(){
    fetch("/logout",{
      method: 'DELETE'
    })
    .then(setUser(null))
    .then(enqueueSnackbar('Logged out successfully', {variant:'success'}))
    .then(navigate('/'))
  }

  
  return (
    <div className='bg-color-primary rounded-lg h-16 '>
        <div className='rounded-sm flex flex-row justify-between items-center h-full w-11/12 px-4'>
          <p className="text-color-white font-medium text-3xl flex items-center">
          SendiT
          </p>

    <div className='flex flex-row items-center justify-evenly h-full w-11/12 mt-5 space-x-4'>
      <Link className='text-color-white font-medium hover:bg-color-secondary p-2 rounded-3xl' to='/'>Home</Link>
     

      {user ? (
        <div className='flex items-center w-4/6 justify-between flex-end my-4  space-x-4'>
          <Link className=' font-medium hover:bg-color-secondary p-2 rounded-3xl' to='/about'>About</Link>
          <Link className=' font-medium hover:bg-color-secondary p-2 rounded-3xl' to='/tracker'>Tracker</Link>
          <Link className=' font-medium hover:bg-color-secondary p-2 rounded-3xl' to='/contact'>Contact Us</Link>
          
          <Button content='Logout' onClick={handleLogOut} className='text-sm hover:bg-color-secondary border text-color-white py-2 px-4' />
          <div className='text-sem text-xl flex my-4'>
            <p className=''>Welcome, {user.username}</p>
          </div>
        </div>
      ) : (
        <div className='w-1/3 m-auto flex justify-between'>
          <Link className='text-color-white font-medium hover:bg-color-secondary p-2 ' to='/login'>LogIn</Link>
          
        </div>
      )}
    </div>
  </div>
        <Outlet></Outlet>
    </div>
  )
}

export default Navbar