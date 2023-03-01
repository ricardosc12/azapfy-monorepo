import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faFilter, faEraser } from '@fortawesome/free-solid-svg-icons';

import ActionButton from '@ui/atoms/ActionButton'
import ActionButtonDoc from '@/stories/atoms/ActionButton/Doc';

export default {
	title: 'Example/ActionButton',
	component: ActionButton,
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
		children: {
			options: ["Search", "Filter", "Eraser"],
			mapping: {
				Search: <FontAwesomeIcon icon={faMagnifyingGlass}/>,
				Filter: <FontAwesomeIcon icon={faFilter}/>,
				Eraser: <FontAwesomeIcon icon={faEraser}/>,
			}
		}
	},
};

const Template: ComponentStory<typeof ActionButton> = (args) => <ActionButton {...args} />;

const Doc: ComponentStory<typeof ActionButtonDoc> = (args) => <ActionButtonDoc {...args}/>

export const Primary = Template.bind({});
Primary.args = {
  children: "Search"
//   startIcon: <FontAwesomeIcon icon={faMagnifyingGlass}/>
};

export const ActionButtonDocs = Doc.bind({})
