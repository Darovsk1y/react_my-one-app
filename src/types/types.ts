export type ContactsType = {
	github: string
	vk: string
	facebook: string
	instagram: string
	twitter: string
	website: string
	youtube: string
	mainLink: string
}
export type PhotosType = {
	small: string | null
	large: string | null
}
export type ProfileType = {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string | null
	fullName: string
	contacts: ContactsType
	photos: PhotosType
}
export type PostType = {
	id: number
	likes: number | null
	name: string | null
	avatar: string | null
	text: string | null
	link: string | null
}
export type UserType = {
	name: string
    id: number
    photos: PhotosType
    status: string | null
    followed: boolean
}
export type UserOnMap= {
	key:number
	id:number
	name:string | null
	status:string | null
	adress:string | null
	avatar:string
	isfollow:boolean
	link:string
	isDisabled:Array<number>
	unfollowThunk:(id:number)=>void
	followThunk:(id:number)=>void
}