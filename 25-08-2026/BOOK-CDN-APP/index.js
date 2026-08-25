function Book(props){
    const image = React.createElement("img",{src:props.image,width:"100px",height:"100px"},null);
    const title = React.createElement ("h2",{style:{color:"red"}},"Title:"+props.title);
    const price = React.createElement("h2",{style:{color:"blue"}},"Price:"+props.price);
    const btn = React.createElement ("button",{onClick:()=>{alert("Added to cart")}},"Add to Cart");
    const div = React.createElement("div",{style:{border:"1px solid #ccc",padding:"10px",margin:"10px",backgroundColor:"aqua",width:"200px",height:"280px",}},[image,title,price,btn]);
    return div;
}
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