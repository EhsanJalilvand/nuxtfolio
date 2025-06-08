export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('intersect', {
    mounted(el, binding) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          binding.value();
          observer.disconnect();
        }
      });
      observer.observe(el);
    },
  });
});
