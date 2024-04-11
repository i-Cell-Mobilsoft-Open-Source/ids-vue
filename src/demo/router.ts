import { createRouter, createWebHistory } from 'vue-router'

import Tag from "./DemoTag.vue";
import Card from "./DemoCard.vue";
import Dialog from "./DemoDialog.vue";
import Avatar from "./DemoAvatar.vue";
import Button from "./DemoButton.vue";
import Divider from "./DemoDivider.vue";
import Accordion from "./DemoAccordion.vue";
import IconButton from "./DemoIconButton.vue";
import ActionPanel from "./DemoActionPanel.vue";
import ActionItemMenu from "./DemoActionMenu.vue";
import ActionItemLink from "./DemoActionItemLink.vue";
import ActionItemButton from "./DemoActionItemButton.vue";

const routes = [
  {
    path: '/',
    redirect: '/components/button'
  },
  {
    path: '/components/button',
    name: 'Button',
    component: Button
  },
  {
    path: '/components/icon-button',
    name: 'IconButton',
    component: IconButton
  },
  {
    path: '/components/tags',
    name: 'Tags',
    component: Tag
  },
  {
    path: '/components/divider',
    name: 'Divider',
    component: Divider
  },
  {
    path: '/components/avatar',
    name: 'Avatar',
    component: Avatar
  },
  {
    path: '/components/action-item-button',
    name: 'ActionItemButton',
    component: ActionItemButton
  },
  {
    path: '/components/action-item-link',
    name: 'ActionItemLink',
    component: ActionItemLink
  },
  {
    path: '/components/action-panel',
    name: 'ActionPanel',
    component: ActionPanel
  },
  {
    path: '/components/action-menu',
    name: 'ActionMenu',
    component: ActionItemMenu
  },
  {
    path: '/components/dialog',
    name: 'Dialog',
    component: Dialog
  },
  {
    path: '/components/card',
    name: 'Card',
    component: Card
  },
  {
    path: '/components/accordion',
    name: 'Accordion',
    component: Accordion
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
