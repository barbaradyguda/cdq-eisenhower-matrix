import { jsxs as _jsxs } from "react/jsx-runtime";
import "../../App.css";
var MatrixSquare = function (_a) {
    var urgentImportantTasks = _a.urgentImportantTasks, urgentTasks = _a.urgentTasks, importantTasks = _a.importantTasks, otherTasks = _a.otherTasks;
    return (_jsxs("div", { children: [urgentImportantTasks && urgentImportantTasks.map(function (urgentImportantTask) { return (_jsxs("p", { children: ["UI ", urgentImportantTask.title] })); }), urgentTasks && urgentTasks.map(function (urgentTask) { return (_jsxs("p", { children: ["U ", urgentTask.title] })); }), importantTasks && importantTasks.map(function (importantTask) { return (_jsxs("p", { children: ["I", importantTask.title] })); }), otherTasks && otherTasks.map(function (otherTask) { return (_jsxs("p", { children: ["O ", otherTask.title] })); })] }));
};
export default MatrixSquare;
