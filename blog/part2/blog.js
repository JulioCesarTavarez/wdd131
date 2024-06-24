const articles = [
	{
	id: 1,
	title: "Septimus Heap Book One: Magyk",
	date: "July 5, 2022",
	description:
	"If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
	imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
	imgAlt: "Book cover for Septimus Heap 1",
	ages: "10-14",
	genre: "Fantasy",
	stars: "****"
	},
	{
	id: 2,
	title: "Magnus Chase Book One: Sword of Summer",
	date: "Dec 12, 2021",
	description:
	"The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
	imgSrc:
	"https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
	imgAlt: "Book cover for Magnus Chase 1",
	ages: "12-16",
	genre: "Fantasy",
	stars: "⭐⭐⭐⭐"
	},
	{
	id: 3,
	title: "Belgariad Book One: Pawn of Prophecy",
	date: "Feb 12, 2022",
	description:
	"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his \"Aunt Pol\" and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
	imgSrc:
	"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
	imgAlt: "Book cover for Pawn of Prophecy",
	ages: "12-16",
	genre: "Fantasy",
	stars: "⭐⭐⭐⭐⭐"
	}
	];

for (let i = 0; i < articles.length; i++)
{

    const info_card = document.createElement("div")
    info_card.classList.add("info_card")
        const date = document.createElement("p")
        date.classList.add("date")
        date.innerText = articles[i]["date"]
        const age_rating = document.createElement("p")
        age_rating.classList.add("age_rating")
        age_rating.innerText = articles[i]["ages"]
        const section = document.createElement("p")
        section.classList.add("section")
        section.innerText = articles[i]["genre"]
        const star_rating = document.createElement("p")
        star_rating.classList.add("star_rating")
        star_rating.innerText = articles[i]["stars"]
        info_card.append(date, age_rating, section, star_rating)


    const book_card = document.createElement("div")
    book_card.classList.add("book_card")
        const h2 = document.createElement("h2")
        h2.innerText = articles[i]["title"]
        const imgage = document.createElement("img")
        imgage.src = articles[i]["imgSrc"]
        const p = document.createElement("p")
        p.innerText = articles[i]["description"]
        const button = document.createElement("button") 
        button.innerText = "Read More..."
        book_card.append(h2, imgage, p, button)
    document.querySelector(".book").append(info_card, book_card)


}
// const book = document.querySelector(".book");
// const book_card = document.querySelector(".book_card");
// const info_card = document.querySelector(".info_card");
// const date = document.querySelector(".date");


// for (let i = 0; i < articles.length; i++)
// {
//     const article = articles[i];
//     document.querySelector(".date").innerHTML += article.date;
    
// }	
