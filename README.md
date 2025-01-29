# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


To install vite
	npm install --global vite

Apply the below code under scripts in package.json

	"homepage": "https://divyayelavarthi.github.io/DivyaYelavarthi",
	
	"scripts": {
    	"start": "react-scripts start",
    	"predeploy": "npm run build",
    	"dev": "vite",
    	"build": "vite build",
    	"lint": "eslint .",
    	"deploy": "gh-pages -d dist",
    	"preview": "vite preview"
  	}

then create 'dist' folder 
	vite build

Deploy using this command
	npm run deploy
