import React from "react";

const CategorySelection = ( {categories} ) => {        
            return(
                <div>
                    <select>                        
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