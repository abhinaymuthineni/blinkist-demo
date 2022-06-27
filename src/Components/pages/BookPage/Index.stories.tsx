import { ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import BookTemplate from "./Index";

export default{
    title:'Template/Home',
    component: BookTemplate
}

const Template:ComponentStory<typeof BookTemplate> = (args) => (<BrowserRouter><BookTemplate {...args} /> </BrowserRouter>);

export const BookPage = Template.bind({});
BookPage.args={
    id:1
};