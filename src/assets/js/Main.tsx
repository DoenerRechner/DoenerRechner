import * as ReactDOM from "react-dom";
import { App } from "app";
import { ChakraProvider } from "@chakra-ui/react";

export default function Main() {
	return (
		<ChakraProvider>
			<App />
		</ChakraProvider>
	);
}

ReactDOM.render(<Main />, document.getElementById("root"));
