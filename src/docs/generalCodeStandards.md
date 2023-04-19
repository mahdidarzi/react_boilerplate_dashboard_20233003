# Project Standards Updates

## Boolean naming convention

Add is/has/can to the start boolean variables.
**Bad**

```typescript
const openMenu = false;
const age = true;
const delete = true;
```

**Good**

```typescript
const isMenuOpen = false;
const hasAge = true;
const canDelete = true;
```

## Bootstrap utility import

You should import individual components like: react-bootstrap/Button rather than the entire library. Doing so pulls in only the specific components that you use, which can significantly reduce the amount of code you end up sending to the client.

```typescript
import Button from 'react-bootstrap/Button';

// or less ideally
import { Button } from 'react-bootstrap';
```

## Absolute path instead of relative path

**Bad**

```typescript
import { PAGINATION_CONSTANTS } from '../../../../shared/ui/organisms/table/constants/constants';
```

**Good**

```typescript
import { PAGINATION_CONSTANTS } from 'shared/ui/organisms/table/constants/constants';
```

- Also it can be helpful to group related imports together.

```typescript
/* for packages */
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

/* for shared utilities */
import { Table } from 'shared/ui/organisms/table';
import { Button } from 'shared/ui/organisms/button';
import type { User } from 'types'; // types should be imported at the end of the group

/* for local utilities */
import { Form } from '../components/form';
import { Header } from '../components/form';
import type { Items } from '../types';
```

## Clean and Predictable Code for Production

- No commented out code block (if you need it it's in commit history).
- No unnecessary console.log unless it's for something like logging errors.
- No ts-ignore flag, the type of the data your using should be defined.

## Typing and Interfaces

- If your using a type definition only in one file it should be local.
- Props for components should be local.
- Only shared types should be global to feature components.
- Do not use any as props type, props type should be defined.
- Create a type folder for shared types if there is any.

**Bad**

```typescript
import { ComponentProps } from '../constants/interfaces';
const Component: React.FC<ComponentProps> = ({ ...props }) => {};
```

**Good**

```typescript
import type { Item } from '../types';
interface ComponentProps {
  generalItems: Item[];
}
const Component: React.FC<ComponentProps> = ({ ...props }) => {};
```

- Also if a component does not have props, do not create an empty interface.

**Bad**

```typescript
interface ComponentProps {}
const Component: React.FC<ComponentProps> = ({ ...props }) => {};
```

**Good**

```typescript
const Component: React.FC = () => {};
```

## Redux and State Management

- Use created custom hooks to access dispatch and selector.

**Bad**

```typescript
import { useDispatch, useSelector } from 'react-redux';
```

**Good**

```typescript
import { useAppDispatch, useAppSelector } from 'core/store/hooks';
```

- use camelCase for creating state variables.

**Bad**

```typescript
const JOURNAL_REDUCER = useAppSelector((state) => state.journalReducer);
```

**Good**

```typescript
const currentLanguage = useAppSelector((state) => state.currentLanguage);
```

- State properties for our reducers should have specific types, "any" is not acceptable.

**Bad**

```typescript
const state: any = {
  items: [],
};
```

**Good**

```typescript
interface ItemsState {
  items: string[];
}

const state: ItemsState = {
  items: [],
};
```
