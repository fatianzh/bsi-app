import { TouchableOpacity, Text } from "react-native";

// traditional functional
// function FunctionName(params/props) {
    // logic
    // return (jsx)
// }
function Button({children}) {
  return (
    <TouchableOpacity>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}

export default Button;

// arrow function
// const FunctionName = (params/props) => {
    // logic
    // return (jsx)
// }

// const Button = ({children}) =>  {
//     return (
//       <TouchableOpacity>
//         <Text>{children}</Text>
//       </TouchableOpacity>
//     );
//   }