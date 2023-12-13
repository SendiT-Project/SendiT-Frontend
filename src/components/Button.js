import React from 'react'

function Button({content, className, type='button', onClick}) {
  return (
    <button
        type={type}
       className={`
                p-5
                mx-3
                font-bold
      
                bg-rich-black 
                hover:bg-color-secondary 
                hover:text-rich-black 
                rounded-3xl
                ${className ? className: ''}`}
      onClick={onClick}
    >
        {content}
    </button>
  )
}

export default Button

// function handledelete(id) {

//     enqueueSnackbar("Are you sure you want to delete this item?", {
//         variant:'info',
//         action: (key) => (
//             <>
//                 <Button  className={''} content={'Confirm'} size="small" onClick={() => { 
//                     closeSnackbar(key);
//                     fetch(/redflags/${id}, {
//                         method: "DELETE",
//                         headers: {
//                             "Content-type": "application/json",
//                         },
//                     })
//                     .then((res) => res.json())
//                     .then((data) => {
//                         enqueueSnackbar(data.message, { variant: 'info' });
//                         setRefresh(!refresh);
//                         console.log(data);
//                     });
//                 }}/>
                    
             
//                 <Button color="inherit" content={'Cancel'} size="small" onClick={() => closeSnackbar(key)}/>
                   
//             </>
//         ),
//     });
//   }


// import { Link, Outlet, useNavigate} from 'react-router-dom'
// import { useSnackbar } from 'notistack';
// import Button from './Button';


// function Navbar({user,setUser}) {
//   const {enqueueSnackbar} = useSnackbar();
//   const navigate=useNavigate()

//   function handleLogOut(){
//     fetch("/logout",{
//       method: 'DELETE'
//     })
//     .then(setUser(null))
//     .then(enqueueSnackbar('Logged out successfully', {variant:'success'}))
//     .then(navigate('/'))
//   }

  
//   return (
//     <div className='bg-color-primary shadow-md rounded-lg h-16 '>
//         <div className='rounded-sm flex flex-row justify-between items-center h-full w-11/12 px-4'>
//           <p className="text-color-white font-medium text-3xl flex items-center">
//           SendiT
//           </p>

//     <div className='flex flex-row items-center justify-evenly h-full w-11/12 mt-5 space-x-4'>
//       <Link className='text-color-white font-medium hover:bg-color-blue2 p-2 rounded-lg' to='/home'>Home</Link>

//       {user ? (
//         <div className='flex items-center w-4/6 justify-between flex-end my-4  space-x-4'>
//           <Link className='text-color-white font-medium hover:bg-color-blue2 p-2 rounded-lg' to='/about'>About</Link>
//           <Link className='text-color-white font-medium hover:bg-color-blue2 p-2 rounded-lg' to='/tracker'>Tracker</Link>
//           <div className='text-sem text-2xl flex my-4'>
//             <p className='text-color-white'>Welcome, {user.username}</p>
//           </div>
//           <Button content='LogOut' onClick={handleLogOut} className='text-sm hover:bg-color-blue2 rounded-lg border text-color-white py-2 px-4' />
//         </div>
//       ) : (
//         <div className='w-1/3 m-auto flex justify-between'>
//           <Link className='text-color-white font-medium hover:bg-color-blue2 p-2 rounded-lg' to='/login'>LogIn</Link>
          
//         </div>
//       )}
//     </div>
//   </div>
//         <Outlet></Outlet>
//     </div>
//   )
// }

// export default Navbar