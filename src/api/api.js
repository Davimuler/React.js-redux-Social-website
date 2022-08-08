import * as axios from "axios";

const instance=axios.create({
   withCredentials:true,
   baseURL:'https://social-network.samuraijs.com/api/1.0/',
   headers:{"API-KEY":'197b567e-5914-4d7b-9fa4-b0ed4ae9be0e'}

})
export const getUsers=(currentPage,PageSize)=>{
   return instance.get(`users?page=${currentPage}&count=${PageSize}`).then(responce=>responce.data)
}
export const apiFollow=(id)=>{
   return instance.post(`follow/${id}`).then(responce=>responce.data)
}
export const apiUnfollow=(id)=>{
   return instance.delete(`follow/${id}`).then(responce=>(responce.data))
}
export const apiHeaderAuth=()=>{
   // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true}).then(responce=>{
   //    this.props.setUserData(responce.data.data)
   // })
   return instance.get(`auth/me`).then(responce=>(responce.data))
}
export const apiGetProfile=()=>{
   return instance.get(`profile/2`).then(responce=>(responce.data))
}
