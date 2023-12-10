import React from 'react'

function Button({content, className, type='button', onClick}) {
  return (
    <button
        type={type}
       className={`
                p-3
                mx-3
                font-bold
                border
                border-platinum 
                bg-rich-black 
                hover:bg-color-tertiary 
                hover:text-rich-black 
                rounded-lg
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