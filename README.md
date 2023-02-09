# Cooperation Jumeau Numérique Common UI
## Add this library to your project
### How to install 

#### Solution 1
Add dependencies cooperation_jn_common_ui to package.json:

    "cooperation_jn_common_ui": "github:sigrennesmetropole/cooperation_jn_common_ui"

And run:

    npm install

#### Solution 2
Run command :

    npm install https://github.com/sigrennesmetropole/cooperation_jn_common_ui.git

### How to update

#### Solution 1
If the depencies cooperation_jn_common_ui is set in the package.json

    npm uninstall cooperation_jn_common_ui
    npm install

#### Solution 2

Manually delete the folder : "node_modules/cooperation_jn_common_ui"\
And run command:

    npm install https://github.com/sigrennesmetropole/cooperation_jn_common_ui.git

## How to add new component to library

In this exemple we create a new component called : Example.vue

1- Add your component in folder lib 
lib/Example.vue

2 - Add the new component on file lib/main.ts

    import Example.vue from './Example.vue'
    export {
    	...,
    	Example.vue
    }
     
3 - Run vite build\
run the command : npm run build 

## How to work locally with this library

In this example we create a new component called: Example.vue\
The component is create in projet : cooperation_jn_common_ui\
And we need to use this new component locally on another project called: project_a

1 - In project cooperation_jn_common_ui\

Run command "npm link" in project cooperation_jn_common_ui\

When you make an update, you have to run "npm run build"
You can run "npm run watch" to build automatically on every file save

2 - In project project_a

Run command "npm link cooperation_jn_common_ui" in project project_a\
\

You can now use the component Example.vue in your project_a:

    import { Example } from  'cooperation_jn_common_ui'

Tips: to delete all the npm link run the command : "npm unlink all"