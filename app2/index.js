//imports
import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native';
//formatações
const Estilos = {
	principal: {
		//fontSize: 30,
		//backgroundColor: '#538530',
		flex: 1,
		justifyContent: 'center',
		alignItems:'center'
		//height: 80,
		//width:300
		//paddingTop: 40,
		//paddingLeft: 50
		//paddingRight: 30
		//padding: 30
		//paddingBottom: 30
		//paddingHorizontal: 20
		//paddingVertical: 30
		//margin: 30,
		//marginLeft: 30
		//marginTop: 30
		//marginBottom: 30
		//marginRight: 30
		//marginVertical: 30
		//marginHorizontal: 30
		//color: '#fff',
		//fontStyle: 'italic'
		//fontWeight: '900' // valores entre 100 e 900 ou bold
		//textAlign: 'left'


		//Shadow só funciona para IOS
		/*shadowColor: '#000',
		shadowOffset: { width: 10, height: 15 },
		shadowOpacity: 1,
		shadowRadius: 5*/
	},
	botao: {
		backgroundColor: '#538530',
		paddingVertical: 10,
		paddingHorizontal:40,
		marginTop: 20
	},
	textoBotao: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold'
	}

	/*imagem: {
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingBottom: 10
	}*/
};

const gerarNovaFrase = () => {
	var numeroAleatorio = Math.random();
	numeroAleatorio = Math.floor(numeroAleatorio * 5);

//frases
	var frases = Array();
	frases[0] = 'Eu não creio na sua ressurreição, mas não ocultarei a emoção que sinto diante de Cristo e dos seus ensinamentos. Perante Ele e a sua história não experimento senão respeito e reverência.';
	frases[1] = 'Não acredito que existam qualidades, valores, modos de vida especificamente femininos: seria admitir a existência de uma natureza feminina, quer dizer, aderir a um mito inventado pelos homens para prender as mulheres na sua condição de oprimidas. Não se trata para a mulher de se afirmar como mulher, mas de tornarem-se seres humanos na sua integridade.';
	frases[2] = 'Creio que aqueles que mais entendem de felicidade são as borboletas e as bolhas de sabão...';
	frases[3] = 'O ignorante afirma, o sábio duvida, o sensato reflete.';
	frases[4] = 'Uma vida não questionada não merece ser vivida.';

	var fraseEscolhida = frases [ numeroAleatorio ];

	Alert.alert(null, fraseEscolhida);
}

//componemte
const App = () => {

	const { principal, botao, textoBotao } = Estilos;

	return (
		<View style={principal}> 

		<Image source={require('./imgs/logo.png')}/>
		<TouchableOpacity onPress={gerarNovaFrase} style={botao}>
			<Text style={textoBotao}>
				Nova Frase
			</Text>
		</TouchableOpacity>

		</View>
	);
};
//renderização
AppRegistry.registerComponent('app2', () => App);
