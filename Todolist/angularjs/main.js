//define model and items data 
var model = {
    user: "Adam",
    items: [{ action: "Buy Flowers", done: false },
                { action: "Get Shoes", done: false },
                { action: "Collect Tickets", done: true },
                { action: "Call Joe", done: false }]
};
// Angular App
var todoApp = angular.module("todoApp", []);
//define checkedItems filter with showComplete parameter
todoApp.filter("checkedItems", function () {
    return function (items, showComplete) {
        var resultArr = [];
        angular.forEach(items, function (item) {
            if (item.done == false || showComplete == true) { // why item.done==false? when using checkedItems filter, it will present incomplete items and also show complete items only when showComplete becomes true---using input ng-model="showComplete" to make it happen
                resultArr.push(item);
            }
        });
        return resultArr;
    }
});
//controller is a collection of methods that will be applied in the scope of controller    
todoApp.controller("ToDoCtrl", function ($scope) {
    //here assign model to todo in the scope
    $scope.todo = model;

    $scope.incompleteCount = function () {
        var count = 0;
        angular.forEach($scope.todo.items, function (item) {
            if (!item.done) { count++ }
        });
        return count;
    }

    $scope.warningLevel = function () {
        return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
    }

    $scope.addNewItem = function (actionText) {
        $scope.todo.items.push({ action: actionText, done: false });
    }
});
