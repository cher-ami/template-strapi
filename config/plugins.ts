export default () => ({
  navigation: {
    enabled: true,
    config: {
      contentTypes: [
        "api::page.page"
      ],
    },
  },
  graphql: { enabled: true },
  upload: {
    enabled: true,
    config: {
      breakpoints: {
        xlarge: { breakpoint: 1920, formats: ["webp", "avif"] },
        large: { breakpoint: 1680, formats: ["webp", "avif"] },
        medium: { breakpoint: 1280, formats: ["webp", "avif"] },
        small: { breakpoint: 640, formats: ["webp", "avif"] },
      },
    },
  },
});
