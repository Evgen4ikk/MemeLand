export interface IMemes { 
	id: number
	userId: number
	myMeme: boolean
	author: string
	name: string
	image: string
	video: string
	views: number
}

export interface iMemesData extends Omit<IMemes, 'id'>{}