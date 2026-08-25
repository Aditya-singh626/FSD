function Book(props){
    const image = React.createElement("img",{src:props.image,width:"100px",height:"100px"},null);
    const title = React.createElement ("h2",{style:{color:"red"}},"Title:"+props.title);
    const price = React.createElement("h2",{style:{color:"blue"}},"Price:"+props.price);
    const btn = React.createElement ("button",{onClick:()=>{alert("Added to cart")}},"Add to Cart");
    const div = React.createElement("div",{style:{border:"1px solid #ccc",padding:"10px",margin:"10px",backgroundColor:"aqua",width:"200px",height:"280px",}},[image,title,price,btn]);
    return div;
}
export default Book;    