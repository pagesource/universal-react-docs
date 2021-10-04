# How do I create a component? Is there a Scaffolding?

You can use our in-built generators to scaffold your components be it atoms, molecules, organisms or templates. Just running will command will start the generator, post which prompts will be asked for the name and other details. For page level components it will also ask if a page entry need to be added.

An example of how the generator functions is shown below:

```shell
PS C:\Users\sowh\Desktop\test> npm run generate

> test4@0.1.0 generate C:\Users\sowh\Desktop\test
> plop --plopfile generators/index.js && npm run pretty-quick 

? [PLOP] Please choose a generator. components - Add an unconnected component (atoms, molecules, organisms, templates)
? Select the type of component Stateless Function
? What should it be called? paragraph
? Where do you want to keep this component? atoms
√  ++ C:\Users\sowh\Desktop\test\src\components\atoms\Paragraph\index.js
√  ++ C:\Users\sowh\Desktop\test\src\components\atoms\Paragraph\Paragraph.js
√  ++ C:\Users\sowh\Desktop\test\src\components\atoms\Paragraph\tests\Paragraph.test.js
√  ++ C:\Users\sowh\Desktop\test\src\components\atoms\Paragraph\Paragraph.story.js
√  ++ C:\Users\sowh\Desktop\test\src\components\atoms\Paragraph\Paragraph.style.js

> test4@0.1.0 pretty-quick C:\Users\sowh\Desktop\test
> pretty-quick

🔍  Finding changed files since git revision null.
🎯  Found 81 changed files.
✍️  Fixing up src/components/atoms/Paragraph/Paragraph.js.
✍️  Fixing up src/components/atoms/Paragraph/Paragraph.story.js.
✍️  Fixing up src/components/atoms/Paragraph/Paragraph.style.js.
✍️  Fixing up src/components/atoms/Paragraph/index.js.
✍️  Fixing up src/components/atoms/Paragraph/tests/Paragraph.test.js.
✅  Everything is awesome!
PS C:\Users\sowh\Desktop\test> 
```

**Note**: The generator supports both Components and Containers to be scaffolded at their respective dir locations `src/components/*` and `*src/containers/*`. If you wish to support a more application contextual directory structure than just atomic, you should consider configuring plop generator configurations at `./generators` accordingly.