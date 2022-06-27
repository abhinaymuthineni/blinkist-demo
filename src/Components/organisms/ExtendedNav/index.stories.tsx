import { ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import ExtendedNav from ".";

export default{
    title:'Organisms/ExtendedNav',
    component:ExtendedNav
}

const Template:ComponentStory<typeof ExtendedNav> = () => (<BrowserRouter><ExtendedNav/></BrowserRouter>);

export const navigation = Template.bind({});
navigation.args={
};