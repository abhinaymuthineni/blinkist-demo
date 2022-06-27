import { ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import LibraryTemplate from "./Index";

export default{
    title:'Template/Home',
    component: LibraryTemplate
}

const Template:ComponentStory<typeof LibraryTemplate> = () => (<BrowserRouter><LibraryTemplate/></BrowserRouter>);

export const LibraryPage = Template.bind({});
LibraryPage.args={};