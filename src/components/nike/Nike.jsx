import './Nike.css'
function Nike(){
    return(
        <div className='nike'>
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo-700x394.png"
                 height="50"/>
            <div className="nike-items">
                <img id="item1" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/787797e3-d2e5-42f0-9387-715934604c33/AIR+FORCE+1+LOW+EVO.png"
                    height="800" width="700"/>
                <img id="item2" src="https://c.static-nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1263,c_limit/tpqid8vgfey6m4ke86te/123-joyride-cdp-apla-xa-xp.jpg"
                    height="400" width="700"/>
                <img id="item3" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D"
                    height="400" width="700"/>
            </div>
        </div>
    );
}
export default Nike;