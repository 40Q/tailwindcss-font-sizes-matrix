# Tailwind CSS Font Sizes Matrix
This custom Tailwind css plugin, helps build a matrix of font sizes and breakpoints.

## Usage
1. Install the package in your project
```
npm install @40q/tailwindcss-font-sizes-matrix
```
or
```
yarn add @40q/tailwindcss-font-sizes-matrix
```

2. Import the package in your tailwind configuration file.
```
import fontSizeMatrix from "@40q/tailwindcss-font-sizes-matrix";
```

3. Disable Tailwind's default font sizes:
```
  theme: {
    fontSize: {}
  }
```

4. Call the function in the plugins array and fill the configuration object. This example will generate the class `text-xs`.
```
  plugins: [
    fontSizeMatrix({
      xs: {
        default: {
          fontSize: "0.75rem",
          lineHeight: "1rem",
        },
        md: "0.875rem",
        lg: "1rem"
      }
    })
  ]
```

