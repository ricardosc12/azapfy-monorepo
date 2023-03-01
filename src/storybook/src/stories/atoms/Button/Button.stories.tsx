import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faFilter, faEraser } from '@fortawesome/free-solid-svg-icons';

import Button from '@ui/atoms/Button';
import ButtonDoc from '@/stories/atoms/Button/Doc';

export default {
	title: 'Example/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
		color: {
			options: [
				"primary",
				"laranjinha",
				"roxo",
				"roxinho",
				"vermelho",
				"vermelinho",
				"cinza",
				"cinzinha"
			],
		},
		startIcon: {
			options: ["Nenhum", "Search", "Filter", "Eraser"],
			mapping: {
				Search: <FontAwesomeIcon icon={faMagnifyingGlass}/>,
				Filter: <FontAwesomeIcon icon={faFilter}/>,
				Eraser: <FontAwesomeIcon icon={faEraser}/>,
				Nenhum: undefined
			}
		},
		endIcon:{
			options: ["Nenhum", "Search", "Filter", "Eraser"],
			mapping: {
				Search: <FontAwesomeIcon icon={faMagnifyingGlass}/>,
				Filter: <FontAwesomeIcon icon={faFilter}/>,
				Eraser: <FontAwesomeIcon icon={faEraser}/>,
				Nenhum: undefined
			}
		}
	},
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const Doc: ComponentStory<typeof ButtonDoc> = (args) => <ButtonDoc {...args}/>

export const Primary = Template.bind({});
Primary.args = {
  children: "Pesquisar",
  startIcon: <FontAwesomeIcon icon={faMagnifyingGlass}/>
};

export const ButtonDocs = Doc.bind({})
