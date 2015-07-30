/*
ToDo:  
1.Create calculator function.
*/
var tipForm = angular.module('tipcalForm', [])

tipForm.controller('mainForm', ['$scope', function($scope) {
    $scope.date = new Date();
    $scope.TipFormShow = true; // Show the form
    $scope.tipsTableShow = false; //hide the table
    $scope.totalCash;
    $scope.totalCredit;
    $scope.totalHours = 0;
    $scope.workers = [{}];
    $scope.getTotalWorkers = function() {
        return $scope.workers.length;
    };
    $scope.addUser = function() {
            $scope.totalHours += $scope.tipFormHours;
            if ($scope.tipFormName.length > 1) {
                $scope.workers.push({
                    workerName: $scope.tipFormName,
                    hours: $scope.tipFormHours,
                    erase: false,
                });
            };
            $scope.tipFormName = '';
            $scope.tipFormHours = 0;
        } // building the calculator (on progress)
    $scope.calculateTips = function() {


        $scope.calculating = 'Calculating.....';
        $scope.TipFormShow = false;
        $scope.tipsTableShow = true;
        $scope.totalTips = [{}];
        for (i = 0; i < $scope.workers.length; i++) {
            $scope.totalTips[i] = {
                workerName: $scope.workers[i].workerName,
                hours: $scope.workers[i].hours,
                cash: Math.round(($scope.totalCash / $scope.totalHours) * $scope.workers[i].hours),
                credit: Math.round(($scope.totalCredit / $scope.totalHours) * $scope.workers[i].hours),
                total: Math.round((($scope.totalCredit / $scope.totalHours) * $scope.workers[i].hours) + (($scope.totalCash / $scope.totalHours) * $scope.workers[i].hours))
            }
        }
        console.log($scope.totalTips);
    }; //end of calculator function
}]); //end of controller