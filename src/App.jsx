import MusicPlayer from './components/MusicPlayer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.scss';

const theme = createTheme({
	palette: {
		primary: {
			light: '#979797',
			main: '#606060',
			dark: '#3c3c3c',
		},
		secondary: {
			main: '#12800a',
		},
		contrastThreshold: 4.5,
	},
	typography: {
		fontFamily: 'Roboto, sans-serif',
		fontSize: 14,
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<MusicPlayer />
		</ThemeProvider>
	);
}

export default App;
