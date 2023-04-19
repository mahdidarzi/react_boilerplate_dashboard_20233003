# Style Guide

This project is using "React material ui" for style utilities and takes advantage of classes provided by it.

## Custom Styles

This project is using sass modules for custom styles with ".module.scss" file extension (EX: button.module.scss). with this method local classnames used in an specific utility will be hashed in the final bundle and conflict between classnames won't happen.


To add custom styles to your component, first you need to consider if it will be used by other utilities in the application or not. if so you should create a global class for it in global styles file, if not you should create a class in a local scss file for that utility.

## Classnames and Conditional Classes

The name convention for our classnames is kebab-case. (EX: simple-table).
This project is using classnames library for conditional styling. check it out [here](https://github.com/JedWatson/classnames).

Example:

```javascript
const classes = classnames('base-class', {
  'base-class__menu--open': isOpen,
});
```

## BEM Naming Convention

BEM provides a simple and scalable architecture for our class names.

In BEM naming convention we have three concepts: Block, Element, Modifier

### Block

Standalone entity that is meaningful on its own.
It is a top-level abstraction of a new component, for example a button: .btn {}. This block should be thought of as a parent.
Examples: header, container, menu, checkbox, input

### Element

A part of a block that has no standalone meaning and is semantically tied to its block.
Elements(or child items), can be placed inside blocks and these are denoted by two underscores following the name of the block like .btn\_\_price { }.
Examples: menu item, list item, checkbox caption, header title

### Modifier

A flag on a block or element. We use them to change appearance or behavior.
Modifiers can manipulate the block so that we can theme or style that particular component without inflicting changes on a completely unrelated module. This is done by appending two hyphens to the name of the block just like btn--orange.
Examples: disabled, highlighted, checked, fixed, size big, color yellow

### Example

```jsx
<div className="person">
  <div className="person__eye person__eye--blue"></div>
</div>
```

```css
.person {
  ...;
} // Block

.person__eye {
  ...;
} // Element of a block

.person__eye--blue {
  ...;
} // Modifier on an element of a block

.person--tall {
  ...;
} // Modifier on a block
```

- Since this project is using sass for styling the BEM naming convention will look something like this:

```scss
.person {
    ...

    &--tal {
        ...
    }

    &__eye {
        ...

        &--blue{
            ...
        }
    }
}
```

If a block has modifiers on it, put theme before element classes.
