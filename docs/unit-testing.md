---
id: unit-testing
title: unit-testing
sidebar_label: Unit Testing
---

# Unit testing with RTL
## Jest setup file
 Developers can add global test features,enviroment,mocks in the file config\jest\jest.setup.js
## Global mock setup
Mocks for files such as jpg, jpeg, png, gif, eot, otf, webp, svg, ttf, woff, woff2, mp4, webm, wav, mp3, m4a, aac, oga and stylesheets are configured
## git hooks
pre-push testing is added in husky
## Test Util Functions

| Test Util Functions                    | Description               |
| ------------------- | -------------------------------------------- |
| assertByTestId(renderComp,testId,isTruthy) | assert whether testId is present |
| assertByTextContent(getByText,textContent)                           | assert whether given textContent is present|
| assertProperty(obj,key,val)                                          |assert value of the property in an object|
| renderWithContext({Comp,ContextProviderRef,state,props})             | renders the component with given context|
| assertMockFunctionArg ({mockFunction,funCallIndex,argIndex,argument})|asserts the mth Argument of Mock Function for n number of function calls|



| Parameter                    | Description               |
| ------------------- | -------------------------------------------- |
| renderComp                                                           | Rendered Component|
| testId                                                               | TestId which has to be checked|
| isTruthy                                                            | if truthy, test passes if the testId is present; if falsy, test passes if the testId is not present|
| getByText                                                            | The getByText property reference of rendered| Component
| textContent                                                          | Text String that needs to be asserted|
| obj                                                                  | object reference |
| key                                                                  | property|
| val                                                                  | expected value of the key|
| Comp                                                                 | Component|
| ContextProviderRef                                                   |context provider (ex: contextProviderRef=SomeContext.Provider)|
| state                                                                | state of context that has to be assigned|
| props                                                                | props that needs to be assigned to the given Component ie.Comp|
| mockFunction                                                         | Mock Function|
| funCallIndex                                                         | Index of nth function call (note:Indexing starts from 0,Index of function for the first call is 0)|
| argIndex                                                             | Index of the argument (Indexing starts from 0)|
| argument                                                             |expected argument|