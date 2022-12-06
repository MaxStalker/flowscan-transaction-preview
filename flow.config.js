import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";
import nodePolyfills from "rollup-plugin-polyfill-node";

export const rollup = () => {
	return [
		builtins(),
		globals(),
		resolve({ browser: true, preferBuiltins: false }),
		commonjs({ exclude: ["queue-microtask"] }),
		nodePolyfills({ include: null }),
	];
};

export const optimizeDepsInclude = () => {
	return [
		"queue-microtask",
		"@improbable-eng/grpc-web",
		"@improbable-eng/grpc-web-node-http-transport",
		"sha3",
		"@onflow/protobuf",
	];
};

export const optimizeDepsExclude = () => {
	return ["@onflow/fcl"];
};