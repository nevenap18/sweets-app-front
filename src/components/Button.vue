<template>
  <button :class="buttonClass" class='button'> {{ label }} </button>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Button',
  props: {
    styleType: {
      type: String,
      required: false,
      default: 'Filled'
    },
    type: {
      type: String,
      required: false,
      default: 'button'
    },
    label: {
      type: String
    }
  },
  components: {
    
  },
  computed: {
    buttonClass () {
      return {
        filled: this.styleType === 'Filled',
        outlined: this.styleType === 'Outlined'
      }
    }
  }
}
</script>

<style scoped lang="scss">

.button {
  display: inline-block;
  padding: 5px 15px;
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  outline: none !important;
  border: none;

  &:focus {
    outline: none;
    border: none;
  }

  &.filled {
    background: #BD79B6;
    color: white;

    &:hover {
      background: lighten(#BD79B6, 10%);
    }
  }

  &.outlined {
    color: #BD79B6;
    border: 1px solid #BD79B6;

    &:hover {
      color: lighten(#BD79B6, 15%);
    }
  }

}


</style>
