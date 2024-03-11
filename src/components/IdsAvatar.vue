<script setup lang="ts">
import { reactive } from "vue";

const props = withDefaults(
  defineProps<{
    size?: "compact" | "comfortable" | "spacious",
    variant?: "surface" | "primary" | "secondary" | "light" | "dark",
    image?: string
  }>(),
  {
    size: "comfortable",
    variant: "primary",
    image: undefined,
  },
);

const avatarStyle = reactive({
  //enabled
  gap: `var(--ids-comp-avatar-size-${props.size}-gap)`,
  color: `var(--ids-comp-avatar-color-fg-${props.variant}-enabled)`,
  background: ` var(--ids-comp-avatar-color-bg-${props.variant}-enabled)`,
  borderRadius: `var(--ids-comp-avatar-size-${props.size}-border-radius)`,
  padding: `var(--ids-comp-avatar-size-${props.size}-padding-y) var(--ids-comp-avatar-size-${props.size}-padding-x)`,
  border: `var(--ids-comp-avatar-size-${props.size}-border) solid var(--ids-comp-avatar-color-border-${props.variant}-enabled)`,

  //hovered
  hoverBackground: `var(--ids-comp-avatar-color-bg-${props.variant}-hovered)`,
  hoverBorder: `var(--ids-comp-avatar-size-${props.size}-border) solid var(--ids-comp-avatar-color-border-${props.variant}-hovered)`,

  //focused
  focusedBackground: `var(--ids-comp-avatar-color-bg-${props.variant}-focused)`,
  focusedBorder: `var(--ids-comp-avatar-size-${props.size}-border) solid var(--ids-comp-avatar-color-border-${props.variant}-focused)`,

  //active
  activeBackground: `var(--ids-comp-avatar-color-bg-${props.variant}-pressed)`,
  activeBorder: `var(--ids-comp-avatar-size-${props.size}-border) solid var(--ids-comp-avatar-color-border-${props.variant}-pressed)`,

  //image sizes
  width: `var(--ids-comp-avatar-size-${props.size}-width)`,
  height: `var(--ids-comp-avatar-size-${props.size}-height)`,
  iconColor: `var(--ids-comp-avatar-color-fg-${props.variant}-enabled)`,
});
</script>

<template>
  <div :class="'flex flex-row items-center gap'">
    <button type="button" :class="[size, 'ids-avatar', { 'light': props.variant === 'light' }]">
      <slot v-if="$slots.default" />
      <div v-else>
        <img v-if="image" :src="image" class="img-size">
        <svg
          v-else width="52"
          height="52" viewBox="0 0 52 52"
          fill="none" xmlns="http://www.w3.org/2000/svg"
          class="icon-size"
        >
          <mask
            id="mask0_3222_9853" style="mask-type: alpha"
            maskUnits="userSpaceOnUse" x="7"
            y="5" width="38"
            height="47"
          >
            <path
              fill-rule="evenodd" clip-rule="evenodd"
              d="M7.79999 44.3943C12.0726 39.0451 18.6378 35.6199 26 35.6199C33.3622 35.6199 39.9274 39.0451 44.2 44.3943C39.554 49.0914 33.1154 52 26 52C18.8846 52 12.446 49.0914 7.79999 44.3943ZM37.6569 16.9C37.6569 23.3617 32.4379 28.6 26 28.6C19.562 28.6 14.343 23.3617 14.343 16.9C14.343 10.4382 19.562 5.19995 26 5.19995C32.4379 5.19995 37.6569 10.4382 37.6569 16.9Z"
              :fill="avatarStyle.iconColor"
            />
          </mask>
          <g mask="url(#mask0_3222_9853)">
            <rect width="52" height="52" fill="currentColor" />
          </g>
        </svg>
      </div>
    </button>
    <div :class="'flex flex-col flex-start'">
      <span :class="size+'-label-text'">
        <slot name="label-text" />
      </span>
      <span :class="size+'-sub-text'">
        <slot name="sub-text" />
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin common {
  display: flex;
  font-style: normal;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: v-bind("avatarStyle.width");
  height: v-bind("avatarStyle.height");
}

@mixin commonLabel {
  line-height: 16px;
  font-style: normal;
  letter-spacing: 0.5px;
}

//icon size
.icon-size {
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%; 
}

//image size
.img-size {
  border-radius: 50%;
  align-items: center;
  flex-direction: column;
  vertical-align: middle;
  justify-content: center;
  width: v-bind("avatarStyle.width");
  height: v-bind("avatarStyle.height");
}
//sizes
.compact {
  @include common;
  font-weight: 500;
  line-height: 1rem;  
  font-style: normal;
  font-size: 0.6875rem;
  letter-spacing: 0.03125rem;
}

.comfortable {
  @include common;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.01563rem;
}

.spacious {
  @include common;
  font-weight: 400;
  font-style: normal;
  font-size: 1.375rem;
  line-height: 1.75rem;
}


.compact-label-text{
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  font-style: normal;
  letter-spacing: 0.5px;
  color: var(--ids-comp-avatar-color-fg-surface-enabled);
}
.compact-sub-text{
  font-size: 11px;
  font-weight: 500;
  font-style: normal;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: var(--ids-comp-avatar-color-fg-surface-enabled-lighter-10);
}

.comfortable-label-text{
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  font-style: normal;
  letter-spacing: 0.5px;
  color: var(--ids-comp-avatar-color-fg-surface-enabled);
}
.comfortable-sub-text{
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: var(--ids-comp-avatar-color-fg-surface-enabled-lighter-10);
}

.spacious-label-text{
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    font-style: normal;
    letter-spacing: 0.1px;
    color: var(--ids-comp-avatar-color-fg-surface-enabled);
  }
.spacious-sub-text{
    font-size: 14px;
    font-weight: 500;
    line-height: 20px; 
    font-style: normal;
    letter-spacing: 0.1px;
    color: var(--ids-comp-avatar-color-fg-surface-enabled-lighter-10);
  }

.flex {
  display: flex;
}

.flex-row {
  flex-direction: row;  
}

.flex-col {
  flex-direction: column;  
}

.items-center {
  align-items: center;
}

.flex-start {
  align-items: flex-start;
}

.gap {
  gap:  v-bind("avatarStyle.gap");
}

//variants
.ids-avatar {
  color: v-bind("avatarStyle.color");
  border: v-bind("avatarStyle.border");
  padding: v-bind("avatarStyle.padding");
  background: v-bind("avatarStyle.background");
  border-radius: v-bind("avatarStyle.borderRadius");

  &:hover {
    border: v-bind("avatarStyle.hoverBorder");
    background: v-bind("avatarStyle.hoverBackground");
  }

  &:focus {
    outline-offset: 2px;
    border: v-bind("avatarStyle.focusedBorder");
    background: v-bind("avatarStyle.focusedBackground");
    border-radius: var(--ids-comp-size-avatar-size-border-radius);
    outline: var(--ids-comp-avatar-focused-outline-size-outline) solid var(--ids-base-color-dark);
  }

  &:active {
    outline: none;
    border: v-bind("avatarStyle.activeBorder");
    background: v-bind("avatarStyle.activeBackground");
  }

  &.light:focus {
    outline: var(--ids-comp-avatar-focused-outline-size-outline) solid var(--ids-comp-avatar-focused-outline-color-light-focused);
  }
}
</style>
