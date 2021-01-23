<template>
  <component :is="as" :class="[$style.vueText, $style[color]]">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { textColorVariationValidator } from '@/components/prop-validators';

export default defineComponent({
  name: 'VueText',
  components: {},
  props: {
    as: { type: String, default: 'span' },
    appearance: { type: String, default: 'body' },
    color: { type: String, default: 'high-emphasis', validator: textColorVariationValidator },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueText {
  &.primary {
    color: var(--brand-primary);
  }

  &.neutral {
    color: var(--brand-neutral);
  }

  &.danger {
    color: var(--brand-danger);
  }

  &.warning {
    color: var(--brand-warning);
  }

  &.success {
    color: var(--brand-success);
  }

  &.info {
    color: var(--brand-info);
  }

  &.high-emphasis {
    color: var(--brand-high-emphasis-text-color);
  }

  &.medium-emphasis {
    color: var(--brand-medium-emphasis-text-color);
  }

  &.low-emphasis {
    color: var(--brand-low-emphasis-text-color);
  }
}
</style>
