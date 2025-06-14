export default defineNuxtPlugin((nuxtApp) => {
  
  // Register a custom Vue directive called 'intersect'
  nuxtApp.vueApp.directive('intersect', {

    // This hook runs when the directive is mounted on an element
    mounted(el, binding) {

      // Define observer options
      const options = {
        threshold: binding.arg ? parseFloat(binding.arg) : 0.15,  //  15% visible by default
      };

      // Create a new IntersectionObserver instance - this will observe the visibility of the element
      const observer = new IntersectionObserver(([entry]) => {

        // Check if the element is in the viewport (based on threshold)
        if (entry.isIntersecting) {

          // Call the function passed to the directive as its value
          binding.value();

          // Stop observing the element after triggering once
          observer.disconnect();
        }
      }, options);

      // Start observing the element
      observer.observe(el);
    },

  });

});
