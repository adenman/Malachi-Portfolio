const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [ flowbite.content(), "./index.html", "./src/**/*.{js,ts,jsx,tsx}" 
    
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(),],
};
