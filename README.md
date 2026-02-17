# 

## Set up



## Deployment

### Online via Github Pages

[Online test version]()

To run on Github Pages, make sure you update the `vite.config.js` file with `base: '/vite-graphologie/'` and the following config:
```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/vite-graphologie/' // for Github pages or any other host solution
})
```
Then:  
- `npm run deploy` builds the app and publishes `/dist` to the gh-pages branch

### Offline

It still needs a server running. `npm run preview` will make the application accessible without the internet. 
