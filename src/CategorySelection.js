import React from "react";

const CategorySelection = ( {categories, selectChange} ) => {        
            return(
                <div>
                    <select onChange={selectChange}>     
                        <option value='random'>RANDOM</option>
                {
                        categories.map((category) => {
                            return <option value={category}>{category.toUpperCase()}</option>                            
                        })
                }             
                    </select>
                </div>
            )
            
}

export default CategorySelection;