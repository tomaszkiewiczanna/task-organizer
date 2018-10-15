/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    //zamienne\n    var infoIn = document.querySelector('.infoIn');\n    var addButton = document.querySelector('#infoIn-addTaskButton');\n    var taskInput = document.querySelector('#infoIn-taskInput');\n    var dateInput = document.querySelector(\"#infoIn-taskDate\").valueAsDate = new Date();\n    var priorityInput = document.querySelector(\"#infoIn-taskPriority\");\n    var taskArr = [];\n\n    var infoOut = document.querySelector('.infoOut');\n    var taskListUl = document.querySelector('#infoOut-taskList');\n\n    var monthNames = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n    var colorsArr = [\"#83A57A\", \"#8AA56B\", \"#AAD185\", \"#F2EAA7\", \"#F2F990\", \"#F2E098\", \"#f2d06b\", \"#EAB06E\", \"#ff7c35\", \"#ff4104\"];\n    var finishedTasksArr = [];\n\n    //utworzenie licznik zadań\n    var counterSpan = document.createElement(\"span\");\n    counterSpan.setAttribute('id', 'task-counter');\n    infoOut.insertBefore(counterSpan, infoOut.firstChild);\n    counterSpan.innerHTML = 'You have <span id=\"task-counter-numb\">0</span> tasks to make.';\n\n    //FUNKCJE\n    function refreshCounter() {\n        finishedTasksArr = [];\n        taskArr.forEach(function (task, i) {\n            if (task.taskDone && finishedTasksArr.indexOf(i) === -1) {\n                finishedTasksArr.push(i);\n            }\n        });\n        document.querySelector('#task-counter-numb').innerHTML = taskArr.length - finishedTasksArr.length;\n    }\n\n    // tworzenie li z tablicy zadań\n    function refreshList(arr) {\n        taskListUl.innerHTML = '';\n        arr.map(function (el) {\n            var newTaskLi = document.createElement('li');\n            newTaskLi.innerHTML = '\\n                    <span class=\"infoOut-taskList-li-square\"></span><h1>' + el.taskName + '</h1><br>\\n                    <p>until ' + el.taskDate.getDate() + ' ' + monthNames[el.taskDate.getMonth()] + ' \\n                    ' + el.taskDate.getFullYear() + '</p><button class=\"deleteButton\">Delete</button>\\n                    <button class=\"completeButton\">Completed</button>';\n            taskListUl.appendChild(newTaskLi);\n            newTaskLi.id = el.taskKey;\n            newTaskLi.querySelector('.infoOut-taskList-li-square').style.background = colorsArr[el.taskPriority - 1];\n            if (el.taskDone) {\n                newTaskLi.classList.add('completed');\n            };\n        });\n    }\n\n    //dodanie zadania\n    addButton.addEventListener('click', function () {\n        if (taskInput.value.length < 1 || taskInput.value.length >= 101) {\n            alert('Task description must be between 1 - 100 letters!');\n        } else if (priorityInput.value === \"\") {\n            alert('Set the priority from 1 up to 10 ');\n        } else {\n            //obiekt zadania dodany do tablicy\n            taskArr.push({\n                taskKey: dateInput.getTime(),\n                taskName: taskInput.value,\n                taskDate: dateInput,\n                taskPriority: Number(priorityInput.value),\n                taskDone: false\n            });\n\n            //reset formularza\n            taskInput.value = \"\";\n            priorityInput.value = \"\";\n            dateInput = new Date();\n            refreshCounter();\n            refreshList(taskArr);\n        }\n    });\n    taskListUl.addEventListener('click', function (e) {\n        if (e.target.classList.contains(\"deleteButton\")) {\n            //usuwanie zadania                                let indexDelete;\n            var parentLi = e.target.parentElement.id;\n            var indexDelete = void 0;\n            taskArr.forEach(function (el, i) {\n                if (el.taskKey === Number(parentLi)) {\n                    indexDelete = i;\n                }\n            });\n            taskArr.splice(indexDelete, 1);\n            e.target.parentElement.parentElement.removeChild(e.target.parentElement);\n            refreshCounter();\n            refreshList(taskArr);\n        }\n\n        // //status ukończenia zadania\n        // const completeButton = taskListUl.querySelectorAll('.completeButton');\n        // completeButton.forEach(compBtn => {\n        //     compBtn.addEventListener('click', () => {\n        //         let indexComp;\n        //         const parentLi = compBtn.parentElement.id;\n        //         taskArr.forEach((el, i) => {\n        //             if (el.taskKey === Number(parentLi)) {\n        //                 indexComp = i;\n        //             }\n        //         });\n        //\n        //         if (compBtn.parentElement.className.indexOf(\"completed\") === -1) {\n        //             compBtn.parentElement.classList.add('completed');\n        //             compBtn.innerText = `not ready`;\n        //             taskArr[indexComp].taskDone = true;\n        //         } else {\n        //             compBtn.parentElement.classList.remove('completed');\n        //             compBtn.innerText = `complited`;\n        //             taskArr[indexComp].taskDone = false;\n        //         }\n        //         refreshCounter();\n        //     })\n        // })\n        //\n        // //usuwanie zrobionych zadań\n        // const removeFinished = document.getElementById('infoOut-removeFinishedTasksButton');\n        // removeFinished.style.display = \"block\";\n        // removeFinished.addEventListener('click', () => {\n        //     const completedTasks = document.querySelectorAll('.completed');\n        //     completedTasks.forEach(finishedLi => {\n        //         finishedLi.parentElement.removeChild(finishedLi);\n        //     })\n        // })\n    });\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });