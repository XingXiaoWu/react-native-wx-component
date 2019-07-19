
# react-native-wx-component

## Getting started

`$ npm install react-native-wx-component --save`

### Mostly automatic installation

`$ react-native link react-native-wx-component`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-wx-component` and add `RNWxComponent.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNWxComponent.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNWxComponentPackage;` to the imports at the top of the file
  - Add `new RNWxComponentPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-wx-component'
  	project(':react-native-wx-component').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-wx-component/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-wx-component')
  	```


## Usage
```javascript
import RNWxComponent from 'react-native-wx-component';

// TODO: What to do with the module?
RNWxComponent;
```
  