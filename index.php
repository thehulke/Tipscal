<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Tipcal">
        <meta name="author" content="Lior G">
        <link rel="icon" href="../../favicon.ico">
        <title>Tipcal - Tip Calculator</title>
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
        <script src="https://oÏss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
        <link rel="stylesheet" type="text/css" href="bootstrap.css" />
        <link rel="stylesheet" type="text/css" href="style.css" />
    </head>
    <!-- Starting -->
    <body ng-app="tipcalForm">
        <?php
        // put your code here
        ?>
        <div class="jumbotron main-heading">
            <h1 class="text-center">Tipcal</h1>
            <p class="text-center">Calculate your tips in the form down below</p>
        </div>
        <div class="main-page">
            <div ng-controller="mainForm">
                <div class="container">
                    <div class="row">
                        
                        <div class="col-md-5 main-form center-block" ng-show="TipFormShow">
                            
                            <form name="masterForm" class="tipForm form-horizontal" novalidate>
                                <name-hours></name-hours>
                            </form>
                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 tips-table center-block">
                            <ng-total-Tips-Table ng-show="tipsTableShow"></ng-total-Tips-Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="jquery.min.js"></script>
        <script type="text/javascript" src="bootstrap.min.js"></script>
        <script type="text/javascript" src="angular.min.js"></script>
        <script src="main-controller.js" type="text/javascript"></script>
        <script src="directives.js" type="text/javascript"></script>
    </body>
</html>