import {useSelector} from 'react-redux';



function UserList({searchKey}){
    const {allUsers}=useSelector((state) => state.userReducer);

    console.log("allUsers:",allUsers);

    return (

        allUsers.map(user=>{
            return    <div className="user-search-filter">

            <div className="filtered-user">
                <div className="filter-user-display">
                    {/* <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="filter-user-avatar"/> */}

                    <div className="user-default-profile-pic">{user.firstname.charAt(0).toUpperCase()}</div>
                    <div className="filter-user-details">
                        
                        <div className="user-display-name">{user.firstname}</div>
                        <div className="user-display-email">sonu@gmail.com</div> 

                    </div>

                    <div className="user-start-chat">
                            <button className="user-start-chat-btn">Start Chat</button>
                    </div>

                </div>
            </div>

        </div>
        })
     
    )

}

export default UserList; 