Wrap Up React Native day 2
1. Flexbox Layouts :  https://reactnative.dev/docs/flexbox
2. React Navigation : https://reactnavigation.org/docs/getting-started/
```bash 
npm install @react-navigation/native @react-navigation/stack react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/viewpager
```
- navigate between screen : https://reactnavigation.org/docs/navigating

3. Quotes rule: 

const name = "Risky"

"" => doubleQuote => 
```
`fardu 'ain ${name} dasdsa`
```

'' => singleQuote => 
```
'mario teguh: "itu sangat super"' + name
```
`` => backtick =>   
```
`dasdasdas
${name}
dsadsadas
dasdas`
```

4. OOP
Object Oriented Programming
--------------------------
Object UMUM => Human, Benda, Hewan, Tumbuhan
Object APP => Screen, Component, Function

HOME
 DATA PROMOSI
 DATA TOP PRODUCTS
 GET DATA PROMOSI 10%
 GET DATA TOP PRODUCTS

------------------------------------------
1. INHERITANCE
------------------------------------------

HOME JURAGAN extend HOME

HOME ANAK SULTAN extend HOME


class HOME 
class HOMEJURAGAN extend HOME

HOME => return jsx 
HOMEJURAGAN => import HOME return HOME

// TOKOPEDIA => GUEST | LOGGED IN
// HomeCore 
// HomeForGuest => import HomeCore modified for guest
// HomeForLoggedIn => import HomeCore modified for LOGGED IN

------------------------------------------
2. POLYMORHISM
------------------------------------------

HOME JURAGAN extends HOME
 overrided GET DATA PROMOSI 10% => 20%

class HOME 
class HOMEJURAGAN extend HOME
 overrided GET DATA PROMOSI 20%

HOME => return jsx 
HOMEJURAGAN => import HOME return HOME


------------------------------------------
3. ENCAPSULATION
------------------------------------------
HOME
 private DATA PROMOSI
 public DATA TOP PRODUCTS
 private GET DATA PROMOSI 10%
 public GET DATA TOP PRODUCTS


------------------------------------------
4. ABSTRACTION
------------------------------------------
Custom Hooks 