const presets = [
  ["@babel/env", {
    targets: {
      "IE": "11"
    },
    useBuiltIns: "usage"
  }],
  "@babel/typescript"
];

module.exports = {presets};
