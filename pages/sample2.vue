<template lang="pug">
  div
    .animated.fadeIn
      b-row
        b-col(sm='6', md='4')
          b-card(header='Card title')
            | Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        b-col(sm='6', md='4')
          b-card(show-footer='')
            | Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            div(slot='footer') Card footer
        b-col(sm='6', md='4')
          b-card(header="<i class='fa fa-check'></i> Card with icon")
            | Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        b-col(sm='6', md='4')
          b-card
            div(slot='header')
              | Card with switch
              label.switch.switch-sm.switch-text.switch-info.float-right.mb-0
                input.switch-input(type='checkbox')
                span.switch-label(data-on='On', data-off='Off')
                span.switch-handle
            | Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
</template>

<script>
export default {
  name: 'cards'
}
</script>
