# Project Structure

    .
    ├─── .vscode
    ├─── __tests__
    ├─── public
    |   ├─── assets
    |   |   ├─── fonts
    |   |   └─── images
    └─── src
        ├─── core
        |   ├─── customHooks
        |   ├─── functions
        |   ├─── locales
        |   ├─── styles
        │   └─── xhr


- root directory:

```sh
+-- .vscode         # vscode related settings
|
+-- __tests__       # global tests
|
+-- public          # public folder can contain the static files such as images, fonts, svgs, favicon, etc.
|
+-- src             # most of the code lives in this folder.
```

- src directory:

```sh
+-- core            # [To be written]
|

- core directory:

```sh
|
+-- customHooks     # hooks
|
+-- functions       # shared functions
|
+-- locales         # translation files for multiple languages
|
+-- styles          # global styles
|
```