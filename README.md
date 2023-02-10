# Cooperation Jumeau Numérique Common UI

## How to add the library to your project

1 - Add the dependency in package.json (in "dependencies" section) :

    "cooperation_jn_common_ui": "github:sigrennesmetropole/cooperation_jn_common_ui"

2 - Add "postinstall" in the section "scripts" of package.json:

    "postinstall": "cd node_modules/cooperation_jn_common_ui && npm run build && cd ../../"

3 - Run "npm install"

4 - Import the style from the library
Add the line below in your file src/main.ts for example:

    import  'cooperation_jn_common_ui/dist/style.css'

## How to work locally

1 - If the folder cooperation_jn_common_ui exist in node_modules folder, delete it

2 - In project cooperation_jn_common_ui run the command : "npm run watch"

3 - On the project on which you want to import the common_ui library, run the command "npm link relative_path/cooperation_jn_common_ui"
