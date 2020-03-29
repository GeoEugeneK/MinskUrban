
// must be used to paint life quality (raw rating values)
function colormapByAttribute(attributeName) {
    return ["case",
                ["all",
                            [">", ["get", attributeName], 0.0],
                            ["<", ["get", attributeName], 3.4]
                        ], "#b60606",

                ["all",
                            [">", ["get", attributeName], 3.4],
                            ["<", ["get", attributeName], 3.6]
                        ], "#e36a54",

                ["all",
                            [">", ["get", attributeName], 3.6],
                            ["<", ["get", attributeName], 3.9]
                        ], "#FFE45C",

                ["all",
                            [">", ["get", attributeName], 3.9],
                            ["<", ["get", attributeName], 4.18]
                        ], "#c8f06a",

                ["all",
                            [">", ["get", attributeName], 4.18],
                            ["<", ["get", attributeName], 5]
                        ], "#4A8F00",

                "rgba(102,78,226,0)"   // fallback color for all the rest - for now, just make them invisible
            ];
}

//     map.setPaintProperty("pts-azyu2q", "circle-color",
// ["interpolate",
//     ["linear"],
//     ["get", "r"],
//         3.254499912261963,
//         "hsl(0, 93%, 23%)",
//         3.55,
//         "hsl(28, 91%, 57%)",
//         3.85,
//         "hsl(50, 100%, 68%)",
//         4.18,
//         "hsl(69, 100%, 47%)",
//         4.5,
//         "hsl(89, 100%, 28%)"
//             ]);