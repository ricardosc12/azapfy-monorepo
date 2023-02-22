import { ThemeProvider } from '@mui/material/styles';
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

export const withMuiTheme = (Story, context) => (
	<ThemeProvider theme={theme}>
		<Story {...context} />
	</ThemeProvider>
);

export const decorators = [withMuiTheme];