"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[954],{"./src/shared/ui/AppLink/ui/AppLink.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder});__webpack_require__("./node_modules/react/index.js");var _Primary$parameters,_Primary$parameters2,_AppLink__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/ui/AppLink/ui/AppLink.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"shared/AppLink",component:_AppLink__WEBPACK_IMPORTED_MODULE_1__.F,argTypes:{backgroundColor:{control:"color"}},args:{to:"/"}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_AppLink__WEBPACK_IMPORTED_MODULE_1__.F,_objectSpread({},args))};Template.displayName="Template";var Primary=Template.bind({});Primary.args={children:"Text",theme:_AppLink__WEBPACK_IMPORTED_MODULE_1__.u},Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"args => <AppLink {...args} />"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2=_Primary$parameters2.docs)||void 0===_Primary$parameters2?void 0:_Primary$parameters2.source)})});var __namedExportsOrder=["Primary"]},"./src/shared/lib/classNames/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function classNames(cls){var mods=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},additional=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return[cls].concat(_toConsumableArray(additional.filter(Boolean)),_toConsumableArray(Object.entries(mods).filter((function(_ref){var _ref2=_slicedToArray(_ref,2),value=(_ref2[0],_ref2[1]);return Boolean(value)})).map((function(_ref3){return _slicedToArray(_ref3,1)[0]})))).join(" ")}__webpack_require__.d(__webpack_exports__,{A:()=>classNames})},"./src/shared/ui/AppLink/ui/AppLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>AppLink,u:()=>AppLinkTheme});var react_router_dom=__webpack_require__("./node_modules/react-router-dom/index.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),AppLink_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/ui/AppLink.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(AppLink_module.Z,options);const ui_AppLink_module=AppLink_module.Z&&AppLink_module.Z.locals?AppLink_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var AppLinkTheme,_excluded=["to","className","children","theme"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}!function(AppLinkTheme){AppLinkTheme.Primary="primary",AppLinkTheme.Secondary="secondary"}(AppLinkTheme||(AppLinkTheme={}));var AppLink=function AppLink(props){var to=props.to,className=props.className,children=props.children,_props$theme=props.theme,theme=void 0===_props$theme?AppLinkTheme.Primary:_props$theme,otherProps=_objectWithoutProperties(props,_excluded);return(0,jsx_runtime.jsx)(react_router_dom.rU,_objectSpread(_objectSpread({to},otherProps),{},{className:(0,classNames.A)(ui_AppLink_module.AppLink,{},[className,ui_AppLink_module[theme]]),children}))};AppLink.displayName="AppLink";try{AppLink.displayName="AppLink",AppLink.__docgenInfo={description:"",displayName:"AppLink",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/AppLink/ui/AppLink.tsx#AppLink"]={docgenInfo:AppLink.__docgenInfo,name:"AppLink",path:"src/shared/ui/AppLink/ui/AppLink.tsx#AppLink"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/ui/AppLink.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-AppLink-ui-AppLink-module__AppLink--sD2Wy{color:var(--primary-color)}.src-shared-ui-AppLink-ui-AppLink-module__primary--hqeiM{color:var(--primary-color)}.src-shared-ui-AppLink-ui-AppLink-module__secondary--Xse3k{color:var(--secondary-color)}","",{version:3,sources:["webpack://./src/shared/ui/AppLink/ui/AppLink.module.scss"],names:[],mappings:"AAAA,yDACI,0BAAA,CAGJ,yDACI,0BAAA,CAGJ,2DACI,4BAAA",sourcesContent:[".AppLink {\r\n    color: var(--primary-color);\r\n}\r\n\r\n.primary {\r\n    color: var(--primary-color);\r\n}\r\n\r\n.secondary {\r\n    color: var(--secondary-color);\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={AppLink:"src-shared-ui-AppLink-ui-AppLink-module__AppLink--sD2Wy",primary:"src-shared-ui-AppLink-ui-AppLink-module__primary--hqeiM",secondary:"src-shared-ui-AppLink-ui-AppLink-module__secondary--Xse3k"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);