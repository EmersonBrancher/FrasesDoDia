//imports
import React from 'react';
import { Text, AppRegistry } from 'react-native';
//formatações
const Estilos = {
	estiloTexto: {
		fontSize: 30,
		backgroundColor: '#08509B',
		//height: 80,
		//width:300
		//paddingTop: 40
		//paddingLeft: 50
		//paddingRight: 30
		//padding: 30
		//paddingBottom: 30
		//paddingHorizontal: 30
		//paddingVertical: 30
		margin: 30
		//marginLeft: 30
		//marginTop: 30
		//marginBottom: 30
		//marginRight: 30
		//marginVertical: 30
		//marginHorizontal: 30


		//Shadow só funciona para IOS
		/*shadowColor: '#000',
		shadowOffset: { width: 10, height: 15 },
		shadowOpacity: 1,
		shadowRadius: 5*/
	}
};

//componemte
const App = () => {
	return (
		<Text style={Estilos.estiloTexto}>Frases do dia</Text>
	);
};
//renderização
AppRegistry.registerComponent('app2', () => App);
