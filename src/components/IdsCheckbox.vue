<script setup lang="ts">
import { CheckboxConfig } from '@models/interfaces';
import { Size } from '@models/size.type';
import { ErrorVariant } from '@models/variants';
import { computed, reactive } from 'vue';
		const componentClass = 'ids-checkbox';

    const props = withDefaults(
  		defineProps<CheckboxConfig>(),
  	{
			variant: ErrorVariant.SURFACE,
			size: Size.COMPACT,
			disabled: false,
			indeterminate: false,
			invalid: false,
			id: '',
  	});

		const state = reactive({
			classList: [
				componentClass,
				addClassPrefix(props.size),
				addClassPrefix(props.variant),
			],
		})

		const isDisabled = computed(() => {
			return props.disabled ? addClassPrefix('disabled') : null;
		});

		const isValid = computed(() => {
			return props.invalid ? addClassPrefix('invalid') : null;
		});

		const isIndeterminate = computed(() => {
			return props.indeterminate ? addClassPrefix('indeterminate') : null;
		});


		function addClassPrefix(className: string | null): string | null {
    	return className ? `${componentClass}-${className}` : null;
  	}
</script>
<template>
  <div :class="[state.classList, isDisabled, isValid, isIndeterminate]">
    <div class="ids-checkbox__input-wrapper">
      <div class="ids-checkbox__touch-target" />
      <input :id="props.id" type="checkbox" :disabled="props.disabled" :indeterminate="props.indeterminate">
      <div class="ids-checkbox__icon">	
        <!-- <svg class="ids-checkbox__checkmark" viewBox="0 0 20 20" focusable="false" fill="none" aria-hidden="true">
          <path d="M3 10.5L9 16.5L18 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg> -->
        <svg viewBox="0 0 20 20" focusable="false" aria-hidden="true">
          <path d="M4 10H15.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
    <div class="ids-checkbox__label-wrapper">
      <div class="ids-checkbox__label-container">
        <label :for="props.id" class="ids-checkbox__label">Az Általános Szerződési Feltételeket a mai nappal tudomásul vettem és elfogadom</label>
        <span class="ids-checkbox__asterisk">*</span>
      </div>
      <span class="ids-checkbox-hint">Checkbox: {{ props.variant }} - {{ props.size }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
$sizes: compact, comfortable, spacious, dense;
$variants: light, dark, surface;

@mixin commonMessageTypography($size) {
	font-family: var(--ids-comp-size-checkbox-message-typography-font-family-#{$size});
	font-style: normal;
	font-weight: var(--ids-comp-size-checkbox-message-typography-font-weight-#{$size});
	letter-spacing: var(--ids-comp-size-checkbox-message-typography-letter-spacing-#{$size});
}

.ids-checkbox {
	display: inline-flex;
	align-self: stretch;
	align-items: flex-start;

	&__input-wrapper {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;

		.ids-checkbox__touch-target {
			position: absolute;
		}

		.ids-checkbox__icon {
			position: absolute;
		}
	}

  	@each $size in $sizes  {
		&.ids-checkbox-#{$size} {
			padding: var(--ids-comp-size-checkbox-container-size-padding-y-#{$size}, 0px) var( --ids-comp-size-checkbox-container-size-padding-x-#{$size});
			gap: var(--ids-comp-size-checkbox-container-size-gap-#{$size}, 8px);

			input[type="checkbox"] {
				appearance: none;
				-webkit-appearance: none;
				flex-shrink: 0;
				width: var(--ids-comp-size-checkbox-input-size-width-#{$size});
    			height: var(--ids-comp-size-checkbox-input-size-height-#{$size});
				border-radius: var(--ids-comp-size-checkbox-input-size-border-radius-#{$size});
				border-width: var(--ids-comp-size-checkbox-input-size-border-width-#{$size});
				border-style: solid;
			}

			.ids-checkbox__input-wrapper {
				.ids-checkbox__touch-target {
					top: calc((var(--ids-comp-size-checkbox-input-size-height-#{$size}) - 40px) / 2 );
					left: calc((var(--ids-comp-size-checkbox-input-size-width-#{$size}) - 40px) / 2 );
					height: 40px;
					width: 40px;
				}

				.ids-checkbox__icon {
					height: var(--ids-comp-size-checkbox-input-size-icon-#{$size});
					width: var(--ids-comp-size-checkbox-input-size-icon-#{$size});
				}
			}


			input[type="checkbox"]:focus {
				outline-offset: 3px;
				outline-style: solid;
				outline-width: var(--ids-comp-size-checkbox-focused-outline-outline-#{size});
			}

			.ids-checkbox__label-wrapper {
				display: flex;
				padding: var(--ids-comp-size-checkbox-label-group-size-padding-y-#{$size}) var(--ids-comp-size-checkbox-label-group-size-padding-x-#{$size});
				flex-direction: column;
				align-items: flex-start;
				gap: var(--ids-comp-size-checkbox-label-group-size-gap-#{$size});
				flex: 1 0 0;
				
				.ids-checkbox__label-container {
					@include commonMessageTypography($size);
					display: flex;
					font-size: var(--ids-comp-size-checkbox-label-typography-font-size-#{$size});
					line-height: var(--ids-comp-size-checkbox-label-typography-line-height-#{$size});
					

					.ids-checkbox__label {
						display: flex;
						align-items: flex-start;
						text-align: start;
					}

					.ids-checkbox__asterisk {
						color: var(--ids-comp-checkbox-asterisk-color-fg-enabled);
						flex-shrink: 0;
					}
				}

				.ids-checkbox-hint, .ids-checkbox-error-msg {
						@include commonMessageTypography($size);
						font-size: var(--ids-comp-size-checkbox-message-typography-font-size-#{$size});
						line-height: var(--ids-comp-size-checkbox-message-typography-line-height-#{$size});
				}
			}
    	}
	}

	@each $variant in $variants {
		&.ids-checkbox-#{$variant} {
			.ids-checkbox__input-wrapper {
				.ids-checkbox__icon {
					color: var(--ids-comp-checkbox-input-selected-color-fg-icon-#{$variant}-enabled);

					&:not(:disabled):hover {
						color: var(--ids-comp-checkbox-input-selected-color-fg-icon-#{$variant}-hovered);
					}

					&:not(:disabled):active {
						color: var(--ids-comp-checkbox-input-selected-color-fg-icon-#{$variant}-pressed);
					}

					&:not(:disabled):focus {
						color: var(--ids-comp-checkbox-input-selected-color-fg-icon-#{$variant}-focused);
					}

					&:disabled {
						color: var(--ids-comp-checkbox-input-selected-color-fg-icon-#{$variant}-disabled);
					}
				}
			}

			input[type="checkbox"] {
				border-color: var(--ids-comp-checkbox-input-unselected-color-border-#{$variant}-enabled);
				background-color: var(--ids-comp-checkbox-input-unselected-color-bg-#{$variant}-enabled);

				&:not(:disabled):hover {
					border-color: var(--ids-comp-checkbox-input-unselected-color-border-#{$variant}-hovered);
					background-color: var(--ids-comp-checkbox-input-unselected-color-bg-#{$variant}-hovered);
				}

				&:not(:disabled):active {
					border-color: var(--ids-comp-checkbox-input-unselected-color-border-#{$variant}-pressed);
					background-color: var(--ids-comp-checkbox-input-unselected-color-bg-#{$variant}-pressed);
				}

				&:not(:disabled):focus {
					border-color: var(--ids-comp-checkbox-input-unselected-color-border-#{$variant}-focused);
					background-color: var(--ids-comp-checkbox-input-unselected-color-bg-#{$variant}-focused);
				}

				&:disabled {
					border-color: var(--ids-comp-checkbox-input-unselected-color-border-#{$variant}-disabled);
					background-color: var(--ids-comp-checkbox-input-unselected-color-bg-#{$variant}-disabled);
				}
			}

			input[type="checkbox"]:checked, input[type="checkbox"]:indeterminate {
                border-color: var(--ids-comp-checkbox-input-selected-color-border-#{$variant}-enabled);
                background-color: var(--ids-comp-checkbox-input-selected-color-bg-#{$variant}-enabled);

				&:not(:disabled):hover {
					border-color: var(--ids-comp-checkbox-input-selected-color-border-#{$variant}-hovered);
					background-color: var(--ids-comp-checkbox-input-selected-color-bg-#{$variant}-hovered);
				}

				&:not(:disabled):active {
					border-color: var(--ids-comp-checkbox-input-selected-color-border-#{$variant}-pressed);
					background-color: var(--ids-comp-checkbox-input-selected-color-bg-#{$variant}-pressed);
				}

				&:not(:disabled):focus {
					border-color: var(--ids-comp-checkbox-input-selected-color-border-#{$variant}-focused);
					background-color: var(--ids-comp-checkbox-input-selected-color-bg-#{$variant}-focused);
				}

				&:disabled {
					border-color: var(--ids-comp-checkbox-input-selected-color-border-#{$variant}-disabled);
					background-color: var(--ids-comp-checkbox-input-selected-color-bg-#{$variant}-disabled);
				}
			}

			.ids-checkbox__label {
				color: var(--ids-comp-checkbox-label-color-fg-#{$variant}-enabled);

				&:not(:disabled):hover {
					color: var(--ids-comp-checkbox-label-color-fg-#{$variant}-hovered);
				}

				&:not(:disabled):active {
					color: var(--ids-comp-checkbox-label-color-fg-#{$variant}-pressed);
				}

				&:not(:disabled):focus {
					color: var(--ids-comp-checkbox-label-color-fg-#{$variant}-focused);
				}

				&:disabled {
					color: var(--ids-comp-checkbox-label-color-fg-#{$variant}-disabled);
				}
			}

			.ids-checkbox-hint {
				color: var(--ids-comp-checkbox-message-color-fg-#{$variant}-enabled);
			}

			.ids-checkbox-error-msg {
				color: var(--ids-comp-checkbox-message-color-fg-text-error-enabled);
			}

			&.ids-checkbox-disabled .ids-checkbox__label {
				color: var(--ids-comp-checkbox-label-color-fg-#{$variant}-disabled);
			}
		}
	}

	&.ids-checkbox-invalid {
		@each $variant in $variants {
			&.ids-checkbox-#{$variant} {
				input[type="checkbox"] {
					border-color: var(--ids-comp-checkbox-input-unselected-color-border-error-enabled);

					&:not(:disabled):hover {
						border-color: var(--ids-comp-checkbox-input-unselected-color-border-error-hovered);
					}

					&:not(:disabled):active {
						border-color: var(--ids-comp-checkbox-input-unselected-color-border-error-pressed);
					}

					&:not(:disabled):focus {
						border-color: var(--ids-comp-checkbox-input-unselected-color-border-error-focused);
					}

					&:disabled {
						border-color: var(--ids-comp-checkbox-input-unselected-color-border-error-disabled);
					}
				}

				input[type="checkbox"]:checked, input[type="checkbox"]:indeterminate {
					border-color: var(--ids-comp-checkbox-input-selected-color-border-error-enabled);

					&:not(:disabled):hover {
						border-color: var(--ids-comp-checkbox-input-selected-color-border-error-hovered);
					}

					&:not(:disabled):active {
						border-color: var(--ids-comp-checkbox-input-selected-color-border-error-pressed);
					}

					&:not(:disabled):focus {
						border-color: var(--ids-comp-checkbox-input-selected-color-border-error-focused);
					}

					&:disabled {
						border-color: var(--ids-comp-checkbox-input-selected-color-border-error-disabled);
					}
				}
			}
		}

		&.ids-checkbox-light {
			input[type="checkbox"]:checked, input[type="checkbox"]:indeterminate {
				& + .ids-checkbox__icon {
					color: var(--ids-comp-checkbox-input-selected-color-fg-icon-error-enabled);
				}

				&:not(:disabled):hover + .ids-checkbox__icon {
					color: var(--ids-comp-checkbox-input-selected-color-fg-icon-error-hovered);
				}

				&:not(:disabled):active + .ids-checkbox__icon {
					color: var(--ids-comp-checkbox-input-selected-color-fg-icon-error-pressed);
				}

				&:not(:disabled):focus + .ids-checkbox__icon {
					color: var(--ids-comp-checkbox-input-selected-color-fg-icon-error-focused);
				}
			}
		}
			
	}

	&.ids-checkbox-disabled {
		opacity: var(--ids-comp-checkbox-disabled);
	}
}
</style> 