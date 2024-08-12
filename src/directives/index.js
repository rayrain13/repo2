import { useIntersectionObserver } from "@vueuse/core";

export const lazyPlugin = {
  install(app) {
    app.directive("img-lazy", {
      mounted(el, binding) {
        //el:指令绑定的元素
        //binding:binding.value：指令等于号后面绑定的表达式的值（图片URL）
        console.log(el, binding);
        useIntersectionObserver(el, ([{ isIntersecting }]) => {
          console.log(isIntersecting);
          if (isIntersecting) el.src = binding.value;
        });
      },
    });
  },
};
