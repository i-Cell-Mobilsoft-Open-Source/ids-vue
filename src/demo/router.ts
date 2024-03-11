import { createRouter, createWebHistory } from 'vue-router'

import Tag from "./DemoTag.vue";
import Avatar from "./DemoAvatar.vue";
import Button from "./DemoButton.vue";
import Divider from "./DemoDivider.vue";
import IconButton from "./DemoIconButton.vue";
import ActionPanel from "./DemoActionPanel.vue";
import ActionItemMenu from "./DemoActionMenu.vue";
import ActionItemLink from "./DemoActionItemLink.vue";
import ActionItemButton from "./DemoActionItemButton.vue";

const routes = [
  {
    path: '/',
    name: 'Button',
    component: Button
  },
  {
    path: '/icon-button',
    name: 'IconButton',
    component: IconButton
  },
  {
    path: '/tags',
    name: 'Tags',
    component: Tag
  },
  {
    path: '/divider',
    name: 'Divider',
    component: Divider
  },
  {
    path: '/avatar',
    name: 'Avatar',
    component: Avatar
  },
  {
    path: '/action-item-button',
    name: 'ActionItemButton',
    component: ActionItemButton
  },
  {
    path: '/action-item-link',
    name: 'ActionItemLink',
    component: ActionItemLink
  },
  {
    path: '/action-panel',
    name: 'ActionPanel',
    component: ActionPanel
  },
  {
    path: '/action-menu',
    name: 'ActionMenu',
    component: ActionItemMenu
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
