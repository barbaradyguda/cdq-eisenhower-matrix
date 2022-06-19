var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./App.css";
import { Typography } from "@mui/material";
import Form from "./components/form";
import Matrix from "./components/matrix";
// let name: string = "basia";
// let age: number | string = 22;
// let isStudent: boolean;
// isStudent = true;
// let hobbies: string[];
// let role: [number, string];
// role = [5, "11"];
// type Person = {
//   name: string;
//   age?: number | string;
// };
// let person: Person = {
//   name: "basia",
//   age: 26,
// };
// type test = Person & {
//   city: string;
// };
// let checkIt: test = {
//   name: "aaa",
//   age: "33",
//   city: "blue",
// };
// let lotsOfPeople: Person[] = [
//   { name: "test1" },
//   { name: "test2", age: "twthree" },
// ];
// let personName: unknown;
// let printName: (name: string) => unknown;
var App = function () {
    var _a = useState({}), task = _a[0], setTask = _a[1];
    var _b = useState([]), tasks = _b[0], setTasks = _b[1];
    var _c = useState([]), urgentImportantTasks = _c[0], setUrgentImportantTasks = _c[1];
    var _d = useState([]), urgentTasks = _d[0], setUrgentTasks = _d[1];
    var _e = useState([]), importantTasks = _e[0], setImportantTasks = _e[1];
    var _f = useState([]), otherTasks = _f[0], setOtherTasks = _f[1];
    console.log(urgentImportantTasks);
    return (_jsxs("div", __assign({ className: "App" }, { children: [_jsx(Typography, __assign({ className: "Header" }, { children: "Eisenhover Matrix" })), _jsx(Form, { urgentImportantTasks: urgentImportantTasks, setUrgentImportantTasks: setUrgentImportantTasks, urgentTasks: urgentTasks, setUrgentTasks: setUrgentTasks, importantTasks: importantTasks, setImportantTasks: setImportantTasks, otherTasks: otherTasks, setOtherTasks: setOtherTasks }), _jsx(Matrix, { urgentImportantTasks: urgentImportantTasks, setUrgentImportantTasks: setUrgentImportantTasks, urgentTasks: urgentTasks, setUrgentTasks: setUrgentTasks, importantTasks: importantTasks, setImportantTasks: setImportantTasks, otherTasks: otherTasks, setOtherTasks: setOtherTasks })] })));
};
export default App;
