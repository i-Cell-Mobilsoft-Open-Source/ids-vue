<template>
  <div class="demo">
    <h1>Radio</h1>

    <h2>Default state</h2>
    <section v-for="(variant, index) in variants" :key="index" :class="variant">
      <h3>{{ variant.toUpperCase() }}</h3>
      <div v-for="(size, index3) in sizes" :key="index3">
        <h4>{{ size }}</h4>
        <div class="radio-group-hv-container">
          <div>
            <h5>Vertical</h5>
            <div class="radio-group-container">
              <IdsRadioGroup
                v-model="first"
                orientation="vertical"
                label-position="right"
                :name="'radio-default-' + variant + '-' + size + '-vertical-right'"
                :size="size"
                :variant="variant"
              >
                <IdsRadioItem value="first">
                  First
                </IdsRadioItem>
                <IdsRadioItem value="second" disabled>
                  Second
                </IdsRadioItem>
                <IdsRadioItem value="third">
                  Third
                </IdsRadioItem>
              </IdsRadioGroup>
              <IdsRadioGroup
                v-model="second"
                orientation="vertical"
                label-position="left"
                :name="'radio-default-' + variant + '-' + size + 'vertical-left'"
                :size="size"
                :variant="variant"
              >
                <IdsRadioItem value="first">
                  First
                </IdsRadioItem>
                <IdsRadioItem value="second">
                  Second
                </IdsRadioItem>
                <IdsRadioItem value="third">
                  Third
                </IdsRadioItem>
              </IdsRadioGroup>
            </div>
          </div>

          <div>
            <h5>Horizontal</h5>
            <div class="radio-group-container">
              <IdsRadioGroup
                v-model="first"
                orientation="horizontal"
                label-position="right"
                :name="'radio-default-' + variant + '-' + size + 'horizontal-right'"
                :size="size"
                :variant="variant"
              >
                <IdsRadioItem value="first">
                  First
                </IdsRadioItem>
                <IdsRadioItem value="second" disabled>
                  Second
                </IdsRadioItem>
                <IdsRadioItem value="third">
                  Third
                </IdsRadioItem>
              </IdsRadioGroup>
              <IdsRadioGroup
                v-model="second"
                orientation="horizontal"
                label-position="left"
                :name="'radio-default-' + variant + '-' + size + 'horizontal-left'"
                :size="size"
                :variant="variant"
              >
                <IdsRadioItem value="first">
                  First
                </IdsRadioItem>
                <IdsRadioItem value="second">
                  Second
                </IdsRadioItem>
                <IdsRadioItem value="third">
                  Third
                </IdsRadioItem>
              </IdsRadioGroup>
              <IdsRadioGroup
                v-model="third"
                orientation="horizontal"
                label-position="top"
                :name="'radio-default-' + variant + '-' + size + 'horizontal-top'"
                :size="size"
                :variant="variant"
              >
                <IdsRadioItem value="first">
                  First
                </IdsRadioItem>
                <IdsRadioItem value="second">
                  Second
                </IdsRadioItem>
                <IdsRadioItem value="third">
                  Third
                </IdsRadioItem>
              </IdsRadioGroup>
              <IdsRadioGroup
                v-model="second"
                orientation="horizontal"
                label-position="bottom"
                :name="'radio-default-' + variant + '-' + size + 'horizontal-bottom'"
                :size="size"
                :variant="variant"
              >
                <IdsRadioItem value="first">
                  First
                </IdsRadioItem>
                <IdsRadioItem value="second">
                  Second
                </IdsRadioItem>
                <IdsRadioItem value="third">
                  Third
                </IdsRadioItem>
              </IdsRadioGroup>
            </div>
          </div>
        </div>
      </div>
    </section>

    <h2>Disabled state</h2>
    <section v-for="(variant, index) in variants" :key="index" :class="variant">
      <h3>{{ variant.toUpperCase() }}</h3>
      <div v-for="(size, index1) in sizes" :key="index1">
        <h4>{{ size }}</h4>
        <div class="radio-group-hv-container">
          <div>
            <h5>Vertical</h5>
            <div class="radio-group-container">
              <IdsRadioGroup
                v-model="first"
                orientation="vertical"
                label-position="right"
                disabled
                :name="'radio-disabled-' + variant + '-' + size + '-vertical-right'"
                :size="size"
                :variant="variant"
              >
                <IdsRadioItem value="first">
                  First
                </IdsRadioItem>
                <IdsRadioItem value="second">
                  Second
                </IdsRadioItem>
                <IdsRadioItem value="third">
                  Third
                </IdsRadioItem>
              </IdsRadioGroup>
              <IdsRadioGroup
                v-model="second"
                orientation="vertical"
                label-position="left"
                disabled
                :name="'radio-disabled-' + variant + '-' + size + 'vertical-left'"
                :size="size"
                :variant="variant"
              >
                <IdsRadioItem value="first">
                  First
                </IdsRadioItem>
                <IdsRadioItem value="second">
                  Second
                </IdsRadioItem>
                <IdsRadioItem value="third">
                  Third
                </IdsRadioItem>
              </IdsRadioGroup>
            </div>
          </div>

          <div>
            <h5>Horizontal</h5>
            <div class="radio-group-container">
              <IdsRadioGroup
                v-model="first"
                orientation="horizontal"
                label-position="right"
                disabled
                :name="'radio-disabled-' + variant + '-' + size + 'horizontal-right'"
                :size="size"
                :variant="variant"
              >
                <IdsRadioItem value="first">
                  First
                </IdsRadioItem>
                <IdsRadioItem value="second">
                  Second
                </IdsRadioItem>
                <IdsRadioItem value="third">
                  Third
                </IdsRadioItem>
              </IdsRadioGroup>
              <IdsRadioGroup
                v-model="second"
                orientation="horizontal"
                label-position="left"
                disabled
                :name="'radio-disabled-' + variant + '-' + size + 'horizontal-left'"
                :size="size"
                :variant="variant"
              >
                <IdsRadioItem value="first">
                  First
                </IdsRadioItem>
                <IdsRadioItem value="second">
                  Second
                </IdsRadioItem>
                <IdsRadioItem value="third">
                  Third
                </IdsRadioItem>
              </IdsRadioGroup>
              <IdsRadioGroup
                v-model="third"
                orientation="horizontal"
                label-position="top"
                disabled
                :name="'radio-disabled-' + variant + '-' + size + 'horizontal-top'"
                :size="size"
                :variant="variant"
              >
                <IdsRadioItem value="first">
                  First
                </IdsRadioItem>
                <IdsRadioItem value="second">
                  Second
                </IdsRadioItem>
                <IdsRadioItem value="third">
                  Third
                </IdsRadioItem>
              </IdsRadioGroup>
              <IdsRadioGroup
                v-model="second"
                orientation="horizontal"
                label-position="bottom"
                disabled
                :name="'radio-disabled-' + variant + '-' + size + 'horizontal-bottom'"
                :size="size"
                :variant="variant"
              >
                <IdsRadioItem value="first">
                  First
                </IdsRadioItem>
                <IdsRadioItem value="second">
                  Second
                </IdsRadioItem>
                <IdsRadioItem value="third">
                  Third
                </IdsRadioItem>
              </IdsRadioGroup>
            </div>
          </div>
        </div>
      </div>
    </section>

    <h3>Error state</h3>
    <section v-for="(variant, index) in variants" :key="index" :class="variant">
      <h3>{{ variant.toUpperCase() }}</h3>
      <div v-for="(size, index2) in sizes" :key="index2">
        <h4>{{ size }}</h4>
        <div class="radio-group-hv-container">
          <div>
            <h5>Vertical</h5>
            <div class="radio-group-container">
              <IdsRadioGroup
                v-model="second"
                orientation="vertical"
                label-position="right"
                maxlength="5"
                :name="'radio-error-' + variant + '-' + size + '-vertical-right'"
                :size="size"
                :variant="variant"
              >
                <IdsRadioItem value="first">
                  First
                </IdsRadioItem>
                <IdsRadioItem value="second">
                  Second
                </IdsRadioItem>
                <IdsRadioItem value="third">
                  Third
                </IdsRadioItem>
              </IdsRadioGroup>
              <IdsRadioGroup
                v-model="second"
                orientation="vertical"
                label-position="left"
                maxlength="5"
                :name="'radio-error-' + variant + '-' + size + 'vertical-left'"
                :size="size"
                :variant="variant"
              >
                <IdsRadioItem value="first">
                  First
                </IdsRadioItem>
                <IdsRadioItem value="second">
                  Second
                </IdsRadioItem>
                <IdsRadioItem value="third">
                  Third
                </IdsRadioItem>
              </IdsRadioGroup>
            </div>
          </div>

          <div>
            <h5>Horizontal</h5>
            <div class="radio-group-container">
              <IdsRadioGroup
                v-model="second"
                orientation="horizontal"
                label-position="right"
                maxlength="5"
                :name="'radio-error-' + variant + '-' + size + 'horizontal-right'"
                :size="size"
                :variant="variant"
              >
                <IdsRadioItem value="first">
                  First
                </IdsRadioItem>
                <IdsRadioItem value="second">
                  Second
                </IdsRadioItem>
                <IdsRadioItem value="third">
                  Third
                </IdsRadioItem>
              </IdsRadioGroup>
              <IdsRadioGroup
                v-model="second"
                orientation="horizontal"
                label-position="left"
                maxlength="5"
                :name="'radio-error-' + variant + '-' + size + 'horizontal-left'"
                :size="size"
                :variant="variant"
              >
                <IdsRadioItem value="first">
                  First
                </IdsRadioItem>
                <IdsRadioItem value="second">
                  Second
                </IdsRadioItem>
                <IdsRadioItem value="third">
                  Third
                </IdsRadioItem>
              </IdsRadioGroup>
              <IdsRadioGroup
                v-model="second"
                orientation="horizontal"
                label-position="top"
                maxlength="5"
                :name="'radio-error-' + variant + '-' + size + 'horizontal-top'"
                :size="size"
                :variant="variant"
              >
                <IdsRadioItem value="first">
                  First
                </IdsRadioItem>
                <IdsRadioItem value="second">
                  Second
                </IdsRadioItem>
                <IdsRadioItem value="third">
                  Third
                </IdsRadioItem>
              </IdsRadioGroup>
              <IdsRadioGroup
                v-model="second"
                orientation="horizontal"
                label-position="bottom"
                maxlength="5"
                :name="'radio-error-' + variant + '-' + size + 'horizontal-bottom'"
                :size="size"
                :variant="variant"
              >
                <IdsRadioItem value="first">
                  First
                </IdsRadioItem>
                <IdsRadioItem value="second">
                  Second
                </IdsRadioItem>
                <IdsRadioItem value="third">
                  Third
                </IdsRadioItem>
              </IdsRadioGroup>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { Size, SizeType } from '../models/size.type';
  import { RadioVariant, RadioVariantType } from '../components/radio/models/IdsRadioVariant.type.ts';
  import IdsRadioGroup from '../components/radio/IdsRadioGroup.vue';
  import IdsRadioItem from '../components/radio/IdsRadioItem.vue';
  import { ref } from "vue";

  const first = ref('first');
  const second = ref('second');
  const third = ref('third');

  const sizes: SizeType[] = [
    Size.DENSE,
    Size.COMPACT,
    Size.COMFORTABLE,
    Size.SPACIOUS,
  ];

  const variants: RadioVariantType[] = [
    RadioVariant.SURFACE,
    RadioVariant.LIGHT,
    RadioVariant.DARK,
  ];
</script>

<style scoped lang="scss">
@import "./demo-style.scss";

h1 {
  font-size: 40px;
}
h2 {
  font-size: 32px;
  margin-top: 3rem;
  margin-bottom: 1rem;
}
h3 {
  font-size: 26px;
}
h4 {
  font-size: 20px;
}
h5 {
  font-size: 16px;
}
h6 {
  font-size: 14px;
}

p {
  margin-bottom: 1rem;
}

section {
  padding: 32px;

  &.dark,
  &.surface {
    background-color: transparent;
  }
  &.light {
    background-color: #252526;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: white;
    }
  }

  h4 {
    margin-bottom: 0;
  }
  h5 {
    margin-bottom: 1rem;
  }

  .radio-group-hv-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8rem;

    & > * {
      flex: 1 1;
    }
  }

  .radio-group-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;

    & > * {
      flex: 1 1;
    }
  }
}

.row {
  display: flex;
}

.col {
  margin-top: 2rem;
  margin-bottom: 1rem;
  flex: 1 1;
}
</style>
