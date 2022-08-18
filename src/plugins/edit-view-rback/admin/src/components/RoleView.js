import React from "react";
import {useCMEditViewDataManager, axios} from "@strapi/helper-plugin"

const RoleView = () =>{
	const {layout, modifiedData} = useCMEditViewDataManager();
	console.log(modifiedData);
	return( <>
		<p>h2</p>
	</>)
}

export default RoleView;