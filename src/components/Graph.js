import React, { Component } from 'react';
import Cytoscape from './Cytoscape';
// import { Grid, Row, Col, Button, ButtonToolbar, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import './style.css'



class Graph extends Component {

	getElements() {
		return {
			nodes: [
				{ data: { id: 'a', parent: 'b' }, position: { x: 215, y: 85 } },
				{ data: { id: 'b' } },
				{ data: { id: 'c', parent: 'b' }, position: { x: 300, y: 85 } },
				{ data: { id: 'd' }, position: { x: 215, y: 175 } },
				{ data: { id: 'e' } },
				{ data: { id: 'f', parent: 'e' }, position: { x: 300, y: 175 } }
			],
			edges: [
				{ data: { id: 'ad', source: 'a', target: 'd' } },
				{ data: { id: 'eb', source: 'e', target: 'b' } }
			]
		};
    }
    
    cyRef(cy) {
		this.cy = cy;
		cy.on('tap', 'node', function (evt) {
			var node = evt.target;
			console.log('tapped ' + node.id());
		});
	}

	handleEval() {
		const cy = this.cy;
		const str = this.text.value;
		eval(str);
	}

	render() {

		return (
			// <Grid>
			// 	<Row>
			// 		<Col sm="8">
						<Cytoscape containerID="cy"
							elements={this.getElements()}
							cyRef={(cy) => { this.cyRef(cy) }}
							cytoscapeOptions={{ wheelSensitivity: 0.1 }}
							layout={{ name: 'dagre' }} />
			// 		</Col>
			// 		<Col sm="4">
			// 			<FormGroup controlId="formControlsTextarea">
			// 				<ControlLabel>CODE</ControlLabel>
			// 				<FormControl componentClass="textarea" cols="100" rows="20" placeholder="textarea" inputRef={(ref) => this.text = ref} />
			// 			</FormGroup>
			// 		</Col>
			// 	</Row>
			// </Grid>
		);
	}
}

export default Graph;