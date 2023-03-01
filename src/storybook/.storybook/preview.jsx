import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { theme } from "@ui/index";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
		color: /(background|color)$/i,
		date: /Date$/,
		},
 	},
}

const css = {
	justifyContent: 'center',
	width: '100%',
	height: 'calc(100vh - 35px)',
	display: 'flex',
	alignItems: 'center'
}

export const withMuiTheme = (Story, context) => (
	<StyledEngineProvider injectFirst>
		<ThemeProvider theme={theme}>
			<div id='main' style={css}>
				<Story {...context} />
			</div>
		</ThemeProvider>
	</StyledEngineProvider>

);

export const decorators = [withMuiTheme];