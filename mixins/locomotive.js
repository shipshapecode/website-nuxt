import debounce from 'lodash.debounce';

export default {
  data() {
    return {
      scrollPosition: 0
    };
  },
  watch: {
    $route() {
      this.lmS.update();
    }
  },
  mounted() {
    this.$nextTick(
      function () {
        // eslint-disable-next-line new-cap
        this.lmS = new this.locomotiveScroll({
          el: document.querySelector('#page-container'),
          smooth: true /* if false disable overflow: hidden on html, body */
        });

        document.onreadystatechange = () => {
          if (document.readyState === 'complete') {
            this.lmS.update();
          }
        };

        window.addEventListener(
          'resize',
          debounce(this.onLmsResize.bind(this), 100)
        );
      }.bind(this)
    );
  },
  destroyed() {
    this.lmS.destroy();
    window.removeEventListener('resize', this.onLmsResize);
  },
  methods: {
    onLmsResize() {
      this.lmS.update();
    }
  }
};
