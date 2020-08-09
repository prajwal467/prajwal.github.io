import React, { Component } from 'react';
import Widecard from '../Components/Widecard';
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="PG Cognitive Science" where="University of Sheffield" from="Septemeber 2018" to="Septemeber 2019"/>
<Widecard title="BSC" where="Vijaya College Jayanagar" from="2014" to="2017"/>
</div>
)
}
}
export default Education