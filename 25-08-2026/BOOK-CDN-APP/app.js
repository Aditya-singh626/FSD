import Book from "../BOOK-CDN-APP/book.js";
const bookdata = [
    {image:"",title:"nodeJS",price:1000},
    {image:"",title:"Vue.js",price:800},
    {image:"",title:"Angular",price:1200},
    {image:"",title:"React",price:1500},
    {image:"",title:"JavaScript",price:500},
    {image:"",title:"TypeScript",price:700},
    {image:"",title:"Python",price:900},
    {image:"",title:"Django",price:1100},
    {image:"",title:"Flask",price:600},
    {image:"",title:"Ruby on Rails",price:1300},
]
function App(){
    const bookstore = bookdata.map((book)=>{
        return Book(book);
    })
    const div = React.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",overflow:"auto"}},[...bookstore])
    return div;
}

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(App());