import React from 'react';
import {
	View,
	Text,
	Image,
	FlatList,
	StyleSheet,
	SafeAreaView,
} from 'react-native';

import { ITEMS, IMAGE, GENRE, TITLE, AUTHOR, DESCRIPTION } from './utils';


export default class App extends React.Component {
	renderContentHeader = () => {
		return (
			<View style={Styles.headerInfo}>
				<Text style={Styles.headerGenre}>{GENRE}</Text>
				<Text numberOfLines={1} style={Styles.headerTitle}>{TITLE}</Text>
				<Text style={Styles.headerAuthor}>{AUTHOR}</Text>
				<Text numberOfLines={2} style={Styles.headerDescription}>{DESCRIPTION}</Text>
			</View>
		);
	};

	renderItem = ({index}) => {
		const chapter = `${ITEMS.length - index}`.padStart(2, '0');

		return (
			<View style={Styles.card}>
				<View style={Styles.cardImage} />
				<View style={Styles.cardInfo}>
					<Text style={Styles.cardTitle}>
						Episode {chapter}
					</Text>
				</View>
				<Text style={Styles.cardNumber}>#{chapter}</Text>
			</View>
		);
	};

	render() {
		return (
			<SafeAreaView style={Styles.root}>
				<View style={Styles.root}>
					<Image
						source={{uri: IMAGE}}
						style={Styles.image}
						resizeMode="cover"
					/>
					<View style={Styles.navbar}>
						<Text style={Styles.title}>Navbar</Text>
					</View>
					<FlatList
						style={Styles.content}
						ListHeaderComponent={this.renderContentHeader}
						data={ITEMS}
						renderItem={this.renderItem}
						ItemSeparatorComponent={() => (
							<View style={Styles.separator} />
						)}
						keyExtractor={(item, index) => `chapter_${index}`}
					/>
				</View>
			</SafeAreaView>
		);
	}
}

const Styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	image: {
		...StyleSheet.absoluteFill,
		width: '100%',
		height: '100%',
	},
	navbar: {
		width: '100%',
		height: 50,
		backgroundColor: 'transparent',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},
	content: {
		flex: 1,
	},
	separator: {
		width: '100%',
		height: StyleSheet.hairlineWidth,
		backgroundColor: 'gray',
	},
	headerInfo: {
		height: 200,
		width: '100%',
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	headerGenre: {
		color: 'white',
		fontSize: 14,
		marginBottom: 5,
	},
	headerTitle: {
		color: 'white',
		fontSize: 28,
		marginBottom: 5,
	},
	headerAuthor: {
		color: 'white',
		marginBottom: 15,
	},
	headerDescription: {
		color: 'white',
	},
	card: {
		height: 80,
		width: '100%',
		flexDirection: 'row',
		backgroundColor: 'rgba(140,140,140,0.8)',
		paddingRight: 15,
		alignItems: 'center',
	},
	cardImage: {
		height: 80,
		width: 80,
		backgroundColor: 'white',
	},
	cardInfo: {
		flex: 1,
		height: '100%',
		paddingHorizontal: 15,
		paddingVertical: 10,
	},
	cardTitle: {
		color: 'black',
	},
});
