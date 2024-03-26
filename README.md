<h3 align="center">
ngx-signature-pads
</h3>
<h5 align="center">
 <a href="https://github.com/sponsors/alessiobianchini" target="_blank">
  Support my open-source code as a sponsor
 </a>
</h5>

[![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&r=r&ts=1683906897&type=6e&v=1.0.5&x2=0)](https://www.npmjs.com/package/ng-flex-layout) 

This module provides Angular developers with a signature pad component.

---
### Demo screenshot
![image](https://github.com/alessiobianchini/ngx-signature-pads/assets/33493281/7640c226-95b2-4cc6-8d94-e4aebcfe091e)

---
### Getting Started

Start by installing the Angular Layout library from `npm`

`npm i -s ngx-signature-pads`

Next, you'll need to import the Layout module in your app's module.

**app.module.ts**

```ts

import { NgxSignaturePadsModule } from 'ngx-signature-pads';
...

@NgModule({
    ...
    imports: [ NgxSignaturePadsModule ],
    ...
});
```

After that is configured, you can use the Angular Layout attributes in your HTML tags for flex layout:
```html
<ngx-signature-pads (saveEvent)="save($event)"></ngx-signature-pads>
```

Input options:
- width: number (default 500px)
- height: number (default 300px)
- lineWidth: number (default 2px)
- hideSave: boolean (default false)
- hideReset: boolean (default false)

Output:
- saveEvent: EventEmitter<string> (base64 image)
---

License: MIT
