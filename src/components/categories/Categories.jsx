import Categoryitem from "../categoryitem/Categoryitem";
import {categoryData} from '../../data/CategoryData'
import './Categories.css'
function Categories(){
    return(
        <div className="Categories">
            {
                categoryData.map((data)=>{
                    return <Categoryitem image={data.image} title={data.title}/>
                })
            }
        </div>
    );
}
export default Categories;