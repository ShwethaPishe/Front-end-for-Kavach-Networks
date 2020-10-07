import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './RequisitionPage3.css';
import '.Logo.css';
import Logo from './Logo.png';

class RequisitionPage3 extends Component
{
	// constructor()
	// {
	// 	super();
	// }
	
	//console.log(logo);

	// fuction Header()
	// {
	// 	return<img src={logo} alt="Logo"/>;
	// }
	render()
	{
		return
		(
			<img src={Logo} alt="Logo"/>
			<h1> Requisition sent Waiting for confirmation  </h1>
		);

		// const styles=StyleSheet.create
		// ({
		// 	italic:{fontStyle:'italic'}
		// })
	}
}

export default RequisitionPage3;
