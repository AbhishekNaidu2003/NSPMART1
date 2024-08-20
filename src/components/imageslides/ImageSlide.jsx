import './ImageSlide.css'
function ImageSlide() {
    setTimeout(function () {
        var img = document.getElementById("c-img");
        img.src ="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/61775218f4487fe8.jpg?q=20";
      }, 2000);
     
      setTimeout(function () {
        var img = document.getElementById("c-img");
        img.src ="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20";
      }, 5000);
     
       setTimeout(function () {
         var img = document.getElementById("c-img");
         img.src ="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9e9aa250dfecdbc3.jpg?q=20";
       }, 8000);
     
       setTimeout(function () {
         var img = document.getElementById("c-img");
         img.src ="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2a11ef7d3cb7034e.jpeg?q=20";
       }, 10000);
      
       return (
         <div className="carousel">
           <img
             id="c-img"
             src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b229a95edd3af8bd.jpg?q=20"
             alt=""
             height={240}
             width={1500}
           />
         </div>
       );
}
export default ImageSlide;