const Tracker = ({user}) => {
    console.log(user)


    return ( <div>
        <h1>This is the tracking component</h1>
        {
        (user && user.orders)?(
        <>
                <h1>{user.username}</h1>
             {user.orders.map((order) =>(
                <div>

                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                    </div>
                    <h1>Hello</h1>
                 <p>{order.destination}</p>
                 <p>{order.pickup}</p>
                 </div>
             ))}   

        </> ):
            
            (<p>session not created</p>)
        }
    </div> );
}
 
export default Tracker;