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
import { jsx as _jsx } from "react/jsx-runtime";
import "../../App.css";
import SingleTask from "./singleTask";
var List = function (_a) {
    var tasks = _a.tasks, setTasks = _a.setTasks;
    return (_jsx("div", { children: tasks.map(function (task) { return (_jsx("li", __assign({ className: "TaskList" }, { children: _jsx(SingleTask, { task: task }) }))); }) }));
};
export default List;
