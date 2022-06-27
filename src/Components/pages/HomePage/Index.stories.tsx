import { ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import HomeTemplate from "./Index";

export default{
    title:'Template/Home',
    component: HomeTemplate
}

const Template:ComponentStory<typeof HomeTemplate> = () => (<BrowserRouter><HomeTemplate/></BrowserRouter>);

export const HomePage = Template.bind({});
HomePage.args={};