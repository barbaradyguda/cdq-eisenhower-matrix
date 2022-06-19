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
import { Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
var singleTask = function (_a) {
    var task = _a.task;
    return (_jsxs("div", { children: [_jsx(Typography, __assign({ className: "Task" }, { children: task.title && task.title })), _jsx(Typography, __assign({ className: "Task" }, { children: task.comment && task.comment })), _jsx(Typography, __assign({ className: "Task" }, { children: task.category && task.category })), _jsx(Typography, __assign({ className: "Task" }, { children: task.id && task.id })), _jsx(EditIcon, { style: { color: "white" } }), _jsx(DeleteIcon, { style: { color: "white" } })] }));
};
export default singleTask;
