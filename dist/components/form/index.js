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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "../../App.css";
import Switch from "@mui/material/Switch";
var label = { inputProps: { "aria-label": "Switch demo" } };
var Form = function (_a) {
    var urgentImportantTasks = _a.urgentImportantTasks, setUrgentImportantTasks = _a.setUrgentImportantTasks, urgentTasks = _a.urgentTasks, setUrgentTasks = _a.setUrgentTasks, importantTasks = _a.importantTasks, setImportantTasks = _a.setImportantTasks, otherTasks = _a.otherTasks, setOtherTasks = _a.setOtherTasks;
    var _b = useState(true), urgent = _b[0], setUrgent = _b[1];
    var _c = useState(true), important = _c[0], setImportant = _c[1];
    var _d = useState(), id = _d[0], setId = _d[1];
    var _e = useState(""), title = _e[0], setTitle = _e[1];
    var _f = useState(""), comment = _f[0], setComment = _f[1];
    var _g = useState(), deadline = _g[0], setDeadline = _g[1];
    var _h = useState(""), category = _h[0], setCategory = _h[1];
    var _j = useState(), isDone = _j[0], setIsDone = _j[1];
    var clearForm = function () {
        setUrgent(true);
        setImportant(true);
        setTitle("");
        setComment("");
        setCategory("");
        setIsDone(undefined);
    };
    var handleAdd = function (e) {
        e.preventDefault();
        if (urgent && important) {
            setUrgentImportantTasks(__spreadArray(__spreadArray([], urgentImportantTasks, true), [
                {
                    urgent: true,
                    important: true,
                    id: Date.now(),
                    title: title || " ",
                    comment: comment || " ",
                    deadline: Date.now(),
                    category: category || " ",
                    isDone: false,
                },
            ], false));
        }
        else if (urgent) {
            setUrgentTasks(__spreadArray(__spreadArray([], urgentTasks, true), [
                {
                    urgent: true,
                    important: false,
                    id: Date.now(),
                    title: title || " ",
                    comment: comment || " ",
                    deadline: Date.now(),
                    category: category || " ",
                    isDone: false,
                },
            ], false));
        }
        else if (important) {
            setImportantTasks(__spreadArray(__spreadArray([], importantTasks, true), [
                {
                    urgent: false,
                    important: true,
                    id: Date.now(),
                    title: title || " ",
                    comment: comment || " ",
                    deadline: Date.now(),
                    category: category || " ",
                    isDone: false,
                },
            ], false));
        }
        else {
            setOtherTasks(__spreadArray(__spreadArray([], otherTasks, true), [
                {
                    urgent: false,
                    important: false,
                    id: Date.now(),
                    title: title || " ",
                    comment: comment || " ",
                    deadline: Date.now(),
                    category: category || " ",
                    isDone: false,
                },
            ], false));
        }
        clearForm();
    };
    return (_jsxs("form", __assign({ className: "Form", onSubmit: handleAdd }, { children: [_jsx(Switch, { checked: urgent, onChange: function (e) { return setUrgent(false); }, inputProps: { "aria-label": "controlled" } }), _jsx("p", { children: "urgent" }), _jsx(Switch, { checked: important, onChange: function (e) { return setImportant(false); }, inputProps: { "aria-label": "controlled" } }), _jsx("p", { children: "important" }), _jsx("input", { className: "Input", type: "input", placeholder: "Enter a task", value: title, onChange: function (e) { return setTitle(e.target.value); } }), _jsx("input", { className: "Input", type: "input", placeholder: "Enter a comment", value: comment, onChange: function (e) { return setComment(e.target.value); } }), _jsx("input", { className: "Input", type: "input", placeholder: "Enter a category", value: category, onChange: function (e) { return setCategory(e.target.value); } }), _jsx("button", __assign({ className: "Button" }, { children: "go" }))] })));
};
export default Form;
