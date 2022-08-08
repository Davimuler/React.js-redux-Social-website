import React from "react";
import S from "./Users.module.css"
import Loading from "../Loading";
import {NavLink} from "react-router-dom";


class Users extends React.Component
{

componentDidMount(){
    if(this.props.UsersData.length===0){
   this.props.GetUsersThunkCreator(this.props.currentPage,this.props.PageSize)
        // getUsers(this.props.currentPage,this.props.PageSize).then(data=>{
        //     this.props.SetUsers(data.items)
        //     this.props.SetTotalUsersCount(data.totalCount);
        //     this.props.LoadingOff()
        // })
      }
}
onPageChanged(PageNumber){
this.props.ChangePageThunk(PageNumber,this.props.PageSize)
    // this.props.SetCurrentPage(PageNumber)
    // this.props.LoadingOn()
    // getUsers(PageNumber,this.props.PageSize).then(data=>{this.props.LoadingOff();
    //     this.props.SetUsers(data.items);
    // })

}
  

    render()
   {
       let PageCount=Math.ceil(this.props.TotalUsersCount/this.props.PageSize)
       let pages=[];
       for(let i=1;i<=PageCount;i++){
          pages.push(i);
       }


    return  <div>
        {/*<button onClick={()=>{this.props.LoadingOff()}}>Off</button>*/}
        {this.props.isLoading ? <Loading/> : <div>
            {
                <div>
                    {pages.map(p => {
                            return <span onClick={() => {
                                this.onPageChanged(p)
                            }} className={this.props.currentPage === p ? S.SelectedPage : S.NotSelectedPage}>{p}</span>
                        }
                    )}
                </div>

            }

            {
                this.props.UsersData.map(u => <div key={u.id}>
         <span>
              <NavLink to={'/Profile/'+u.id}>  <div>

                 <img
                     src={u.photos.small === null ? 'https://www.tudorwatch.com/-/media/tudorwatch/pressroom/ambassadors/david-beckham/david-beckham-pressroom.jpg' : u.photos.small}
                     className={S.UsersPhoto}/>
             </div></NavLink>

             <div>
                 {(u.followed) ? <button disabled={this.props.StillFollowingV.some(id=>id===u.id)} onClick={() => {
                     this.props.UnfollowThunk(u.id)
                 }}>Unfollow</button> : <button disabled={this.props.StillFollowingV.some(id=>id===u.id)} onClick={() => {
                     this.props.FollowThunk(u.id)
                     // this.props.StillFollowing(true,u.id)
                     // apiFollow(u.id).then(data=>{
                     //     if(data.resultCode===0){
                     //         this.props.Follow(u.id)
                     //     }
                     //     this.props.StillFollowing(false,u.id)
                     // })





                 }}>Follow</button>}
            </div>
         </span>

                        <span>
            <span>
            <div> {u.name}</div>
            </span>
            <span>
            {/* <div>{u.location.Country}</div>
                <div>{u.location.City}</div> */}
            </span>
        </span>
                    </div>
                )
            }
        </div>
        }


    </div>
 }
}
export default Users;