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
	lookingForAJobDescription: string
	fullName: string
	contacts: ContactsType
	photos: PhotosType
	aboutMe: string
}
export type PostType = {
	id: number
	likes: number
	name: string
	avatar: string
	text: string
	link: string
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
export type FriendType = {
	id: number
	name: string | null
	photos: PhotosType
	followed: boolean
}
// для dialogs.reduser
export type MessageObjectType = {
	id: number
	image: string
	link: string
	position: string
	message: string
}
export type DialogObjectType = {
	id: number
	name: string
	image: string
	text: string
}
//! как задать тип Field что бы ждать от него опред. константу name ???
export type UniversalKeysFormType<T> = { //todo валидируем поле name
	name: keyof T // где Т - это обьект у которого ключ нужный для name
	component:any
	className?:string
	type?:string
	validate?: any
	placeholder?:any
	autoFocus?:boolean
}
export type GetStringKeys<T> = Extract<keyof T, string>