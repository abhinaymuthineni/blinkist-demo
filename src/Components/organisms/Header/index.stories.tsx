import { ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Header from ".";

export default{
    title:'Organisms/Header',
    component:Header
}

const Template : ComponentStory<typeof Header> = (args) => (<BrowserRouter><Header {...args}/> </BrowserRouter>);

export const headerLogedIn = Template.bind({});
headerLogedIn.args={
    avatarIcon:false
};

export const headerLogedInWithAvathar = Template.bind({});
headerLogedInWithAvathar.args={
    avatarIcon:true
};