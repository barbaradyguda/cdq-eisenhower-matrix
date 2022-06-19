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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "../../App.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MatrixSquare from "./matrixSquare";
var Matrix = function (_a) {
    var urgentImportantTasks = _a.urgentImportantTasks, setUrgentImportantTasks = _a.setUrgentImportantTasks, urgentTasks = _a.urgentTasks, setUrgentTasks = _a.setUrgentTasks, importantTasks = _a.importantTasks, setImportantTasks = _a.setImportantTasks, otherTasks = _a.otherTasks, setOtherTasks = _a.setOtherTasks;
    return (_jsx(_Fragment, { children: _jsx(Box, __assign({ sx: {
                flexGrow: 1,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: 8,
            } }, { children: _jsxs(Grid, __assign({ container: true, spacing: 2, sx: { width: "80%" } }, { children: [_jsx(Grid, __assign({ item: true, xs: 6, style: { backgroundColor: "#fae8d6", border: "4px solid #282c34" } }, { children: _jsx(MatrixSquare, { urgentImportantTasks: urgentImportantTasks, urgentTasks: [], importantTasks: [], otherTasks: [] }) })), _jsx(Grid, __assign({ item: true, xs: 6, style: { backgroundColor: "#f3ebd1", border: "4px solid #282c34" } }, { children: _jsx(MatrixSquare, { urgentTasks: urgentTasks, urgentImportantTasks: [], importantTasks: [], otherTasks: [] }) })), _jsx(Grid, __assign({ item: true, xs: 6, style: { backgroundColor: "#ffecba", border: "4px solid #282c34" } }, { children: _jsx(MatrixSquare, { importantTasks: importantTasks, urgentImportantTasks: [], urgentTasks: [], otherTasks: [] }) })), _jsx(Grid, __assign({ item: true, xs: 6, style: { backgroundColor: "#dbe6e3", border: "4px solid #282c34" } }, { children: _jsx(MatrixSquare, { otherTasks: otherTasks, urgentImportantTasks: [], urgentTasks: [], importantTasks: [] }) }))] })) })) }));
};
export default Matrix;
