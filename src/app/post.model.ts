export class Post {
    constructor(
        public title: string, 
        public desc: string, 
        public imagePath: string, 
        public postAddedby: string, 
        public postDateTime: Date
    ){}
}