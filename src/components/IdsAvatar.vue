<script setup lang="ts">
import { AvatarConfig } from "@models/interfaces";
import { Size } from "@models/size.type";
import { SurfaceVariant } from "@models/variants";
import { reactive } from "vue";

const props = withDefaults(
  defineProps<AvatarConfig>(),
  {
    size: Size.COMFORTABLE,
    variant: SurfaceVariant.PRIMARY,
    image: undefined,
    interactive: false,
  },
);

const avatarStyle = reactive({
  //enabled
  gap: `var(--ids-comp-avatar-size-gap-${props.size})`,
  color: `var(--ids-comp-avatar-color-fg-${props.variant}-default)`,
  background: props.image ? 'none' : `var(--ids-comp-avatar-color-bg-${props.variant}-default)`,
  borderRadius: `var(--ids-comp-avatar-size-border-radius-${props.size})`,
  padding: props.image ? "0px" : `var(--ids-comp-avatar-size-padding-y-${props.size}) var(--ids-comp-avatar-size-padding-x-${props.size})`,
  border: `var(--ids-comp-avatar-size-border-${props.size}) solid var(--ids-comp-avatar-color-border-${props.variant}-default)`,

  //hovered
  hoverBackground: `var(--ids-comp-avatar-color-bg-${props.variant}-hovered)`,
  hoverBorder: `var(--ids-comp-avatar-size-border-${props.size}) solid var(--ids-comp-avatar-color-border-${props.variant}-hovered)`,

  //focused
  focusedBackground: `var(--ids-comp-avatar-color-bg-${props.variant}-focused)`,
  focusedBorder: `var(--ids-comp-avatar-size-border-${props.size}) solid var(--ids-comp-avatar-color-border-${props.variant}-focused)`,
  focusBorderRadius: `var(--ids-comp-avatar-size-border-radius-${props.size})`,

  //active
  activeBackground: `var(--ids-comp-avatar-color-bg-${props.variant}-pressed)`,
  activeBorder: `var(--ids-comp-avatar-size-border-${props.size}) solid var(--ids-comp-avatar-color-border-${props.variant}-pressed)`,

  //image sizes
  width: `var(--ids-comp-avatar-size-width-${props.size})`,
  height: `var(--ids-comp-avatar-size-height-${props.size})`,
  iconColor: `var(--ids-comp-avatar-color-fg-${props.variant}-default)`,

  //font
  initialsFontFamily: `var(--ids-comp-avatar-initials-typography-font-family-${props.size})`,
  initialsFontWeight: `var(--ids-comp-avatar-initials-typography-font-weight-${props.size})`,
  initialsFontSize: `var(--ids-comp-avatar-initials-typography-font-size-${props.size})`,
  initialsLineHeight: `var(--avatar-initials-typography-line-height-${props.size})`,
  initialsLetterSpacing: `var(--ids-comp-avatar-initials-typography-letter-spacing-${props.size})`,
  labelFontFamily: `var(--ids-comp-avatar-label-typography-font-family-${props.size})`,
  labelFontWeight: `var(--ids-comp-avatar-label-typography-font-weight-${props.size})`,
  labelFontSize: `var(--ids-comp-avatar-label-typography-font-size-${props.size})`,
  labelLineHeight: `var(--ids-comp-avatar-label-typography-line-height-${props.size})`,
  labelLetterSpacing: `var(--ids-comp-avatar-label-typography-letter-spacing-${props.size})`,
  subLabelFontFamily: `var(---ids-comp-avatar-sublabel-typography-font-family-${props.size})`,
  subLabelFontWeight: `var( --ids-comp-avatar-sublabel-typography-font-weight-${props.size})`,
  subLabelFontSize: `var(--ids-comp-avatar-sublabel-typography-font-size-${props.size})`,
  subLabelLineHeight: `var(--ids-comp-avatar-sublabel-typography-line-height-${props.size})`,
  subLabelLetterSpacing: `var(--ids-comp-avatar-sublabel-typography-letter-spacing-${props.size})`,
});
</script>

<template>
  <div :class="[{ 'flex flex-row items-center gap': $slots.labelText || $slots.subText }]">
    <component :is="interactive ? 'button' : 'div'" :type="interactive ? 'button': ''" :class="[size, 'ids-avatar', { 'light': props.variant === 'light' }]">
      <slot v-if="$slots.default" />
      <div v-else>
        <img v-if="image" :src="image" class="img-size object-fit-cover">
        <svg
          v-else width="52" height="52" viewBox="0 0 52 52"
          fill="none" xmlns="http://www.w3.org/2000/svg"
          class="icon-size"
        >
          <mask
            id="mask0_3222_9853" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="7"
            y="5" width="38"
            height="47"
          >
            <path
              fill-rule="evenodd" clip-rule="evenodd"
              d="M7.79999 44.3943C12.0726 39.0451 18.6378 35.6199 26 35.6199C33.3622 35.6199 39.9274 
              39.0451 44.2 44.3943C39.554 49.0914 33.1154 52 26 52C18.8846 52 12.446 49.0914 7.79999 
              44.3943ZM37.6569 16.9C37.6569 23.3617 32.4379 28.6 26 28.6C19.562 28.6 14.343 23.3617 
              14.343 16.9C14.343 10.4382 19.562 5.19995 26 5.19995C32.4379 5.19995 37.6569 10.4382 37.6569 16.9Z"
              :fill="avatarStyle.iconColor"
            />
          </mask>
          <g mask="url(#mask0_3222_9853)">
            <rect width="52" height="52" fill="currentColor" />
          </g>
        </svg>
      </div>
    </component>
    <div v-if="$slots.labelText || $slots.subText" :class="'flex flex-col flex-start'">
      <span :class="size + '-label-text'">
        <slot name="labelText" />
      </span>
      <span :class="size + '-sub-text'">
        <slot name="subText" />
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
$sizes: compact, comfortable, spacious, dense;

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
@each $size in $sizes {
  .#{$size} {
    @include common;
    font-family: v-bind("avatarStyle.initialsFontFamily");
    font-weight: v-bind("avatarStyle.initialsFontWeight");
    line-height: v-bind("avatarStyle.initialsLineHeight");
    font-size: v-bind("avatarStyle.initialsFontSize");
    letter-spacing: v-bind("avatarStyle.initialsLetterSpacing");
  }

  .#{$size}-label-text {
    font-family: v-bind("avatarStyle.labelFontFamily");
    font-size: v-bind("avatarStyle.labelFontSize");
    font-weight: v-bind("avatarStyle.labelFontWeight");
    line-height: v-bind("avatarStyle.labelLineHeight");
    font-style: normal;
    letter-spacing: v-bind("avatarStyle.labelLetterSpacing");
    color: var(--ids-comp-avatar-color-fg-surface-default);
  }

  .#{$size}-sub-text {
    font-family: v-bind("avatarStyle.subLabelFontFamily");
    font-size: v-bind("avatarStyle.subLabelFontSize");
    font-weight: v-bind("avatarStyle.subLabelFontWeight");
    line-height: v-bind("avatarStyle.subLabelLineHeight");
    font-style: normal;
    letter-spacing: v-bind("avatarStyle.subLabelLetterSpacing");
    color: var(--ids-comp-avatar-color-fg-surface-default-lighter-10);
  }
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
  gap: v-bind("avatarStyle.gap");
}

.p-0 {
  padding: 0px;
}

.object-fit-cover {
  object-fit: cover;
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
    border-radius: var("avatarStyle.focusBorderRadius");
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
