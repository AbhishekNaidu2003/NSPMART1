import './Zara.css'
function Zara(){
    return(
        <div className='zara'>
            <img src="https://logos-world.net/wp-content/uploads/2020/05/Zara-Logo-700x394.png"
                 height="50"/>
            <div className="zara-items">
                <img id="item1" src="https://images.unsplash.com/photo-1536977400-8c6f90c75df6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHphcmF8ZW58MHx8MHx8fDA%3D"
                    height="800" width="700"/>
                <img id="item2" src="https://static.zara.net/assets/public/b98e/6133/a6094dc4bf41/d36af31b44f9/20120648999-ult3/20120648999-ult3.jpg?ts=1723646385161&w=1920"
                    height="400" width="700"/>
                <img id="item3" src="https://assets.teenvogue.com/photos/57e28fa8046b3a2e2a7366ae/16:9/w_1920,c_limit/zara.jpg"
                    height="400" width="700"/>
            </div>
        </div>
    );
}
export default Zara;