<script setup lang="ts">
import { CheckboxConfig } from '@models/interfaces';
import { Size } from '@models/size.type';
import { ErrorVariant } from '@models/variants';
import { reactive } from 'vue';
		const componentClass = 'ids-checkbox';

    const props = withDefaults(
  		defineProps<CheckboxConfig>(),
  	{
			variant: ErrorVariant.SURFACE,
			size: Size.COMPACT,
			isDisabled: false,
  	});

		const state = reactive({
			classList: [
				componentClass,
				addClassPrefix(props.size),
				addClassPrefix(props.variant),
			],
		})

		function addClassPrefix(className: string | null): string | null {
    	return className ? `${componentClass}-${className}` : null;
  	}
</script>
<template>
  <div :class="state.classList">
    <input id="checkbox" type="checkbox">
    <div class="ids-checkbox-label-wrapper">
      <div class="ids-checkbox-label-container">
        <label for="checkbox" class="ids-checkbox-label">Az Általános Szerződési Feltételeket a mai nappal tudomásul vettem és elfogadom</label>
        <span class="ids-checkbox-asterisk">*</span>
      </div>
      <span class="ids-checkbox-hint">Message place</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
$sizes: compact, comfortable, spacious, dense;
$variants: light, dark, error, surface;

@mixin commonMessageTypography($size) {
	font-family: var(--ids-comp-size-checkbox-message-typography-font-family-#{$size}, Montserrat);
	font-style: normal;
	font-weight: var(--ids-comp-size-checkbox-message-typography-font-weight-#{$size}, 400);
	letter-spacing: var(--ids-comp-size-checkbox-message-typography-letter-spacing-#{$size}, 0px);
}


.ids-checkbox {
	display: inline-flex;
	align-self: stretch;
	align-items: flex-start;

  @each $size in $sizes  {
		&.ids-checkbox-#{$size} {
			padding: var(--ids-comp-size-checkbox-container-size-padding-y-#{$size}, 0px) var( --ids-comp-size-checkbox-container-size-padding-x-#{$size}, 0px);
			gap: var(--ids-comp-size-checkbox-container-size-gap-#{$size}, 8px);

			input[type="checkbox"] {
				appearance: none;
				-webkit-appearance: none;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-shrink: 0;
				width: var(--ids-comp-size-checkbox-input-size-width-#{$size}, 24px);
    		height: var(--ids-comp-size-checkbox-input-size-height-#{$size}, 24px);
				border-radius: var(--ids-comp-size-checkbox-input-size-border-radius-#{$size}, 2px);
				border-width: var(--ids-comp-size-checkbox-input-size-border-width-#{$size}, 2px);
				border-style: solid;
			}

			.ids-checkbox-label-wrapper {
				display: flex;
				padding: var(--ids-comp-size-checkbox-label-group-size-padding-y-#{$size}, 2px) var(--ids-comp-size-checkbox-label-group-size-padding-x-#{$size}, 0px);
				flex-direction: column;
				align-items: flex-start;
				gap: var(--ids-comp-size-checkbox-label-group-size-gap-#{$size}, 4px);
				flex: 1 0 0;
				
				.ids-checkbox-label-container {
					@include commonMessageTypography($size);
					display: flex;
					font-size: var(--ids-comp-size-checkbox-label-typography-font-size-#{$size}, 16px);
					line-height: var(--ids-comp-size-checkbox-label-typography-line-height-#{$size}, 20px);
					

					.ids-checkbox-label {
						display: flex;
						align-items: flex-start;
						text-align: start;
					}

					.ids-checkbox-asterisk {
						color: var(--ids-comp-checkbox-asterisk-color-fg-enabled, #EF4444);
						flex-shrink: 0;
					}
				}

				.ids-checkbox-hint, .ids-checkbox-error-msg {
						@include commonMessageTypography($size);
						font-size: var(--ids-comp-size-checkbox-message-typography-font-size-#{$size}, 12px);
						line-height: var(--ids-comp-size-checkbox-message-typography-line-height-#{$size}, 16px);
				}
				//TODO átrakni a dolgokat
				.ids-checkbox-error-msg {
					color: var(--ids-comp-checkbox-message-color-fg-text-error-enabled, #EF4444);
				}
			}
    }
	}

	@each $variant in $variants {
		&.ids-checkbox-#{$variant} {
			input[type="checkbox"] {
				border-color: var(--ids-comp-checkbox-input-unselected-color-border-#{$variant}-enabled, #64748B);
				background: var(--ids-comp-checkbox-input-unselected-color-bg-#{$variant}-enabled, #FFF);

				&:hover {
					border-color: var(--ids-comp-checkbox-input-unselected-color-border-#{$variant}-hovered);
					background: var(--ids-comp-checkbox-input-unselected-color-bg-#{$variant}-hovered);
				}

				&:active {
					border-color: var(--ids-comp-checkbox-input-unselected-color-border-#{$variant}-pressed);
					background: var(--ids-comp-checkbox-input-unselected-color-bg-#{$variant}-pressed);
				}

				&:focus {
					border-color: var(--ids-comp-checkbox-input-unselected-color-border-#{$variant}-focused);
					background: var(--ids-comp-checkbox-input-unselected-color-bg-#{$variant}-focused);
				}
			}


		}
	}
}
</style> 