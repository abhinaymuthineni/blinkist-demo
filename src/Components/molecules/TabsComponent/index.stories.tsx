import { ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import TabsComponent from ".";

export default{
    title:"Molecules/Tabs",
    component:TabsComponent
}

const Template:ComponentStory<typeof TabsComponent> = () => (<BrowserRouter><TabsComponent/></BrowserRouter>);

export const tabsComponent = Template.bind({})
tabsComponent.args={}