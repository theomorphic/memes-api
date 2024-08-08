
let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");
let url = "https://meme-api.com/gimme/";

// let subreddits = ["minecraft", "dankmemes", "catmemes", "dogmemes", "me_irl"];
let subreddits = ["latvianMemes", "lativa"];

let getMeme = ()=>{
	let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)]

	fetch(url+randomSubreddit)
	.then(resp => resp.json())
	.then(data =>{
		console.log(data)
		let memeImg = new Image();
		memeImg.onload = () =>{
			meme.src = data.url;
		}
		memeImg.src = data.url;
		title.innerHTML = data.title;
	})
}

getMemeBtn.addEventListener("click", getMeme)