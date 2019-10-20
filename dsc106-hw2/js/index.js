var dates = ['Jan-18', 'Feb-18', 'Mar-18', 'Apr-18', 'May-18', 'Jun-18', 'Jul-18', 'Aug-18', 'Sep-18', 'Oct-18', 'Nov-18', 'Dec-18', 'Jan-19', 'Feb-19', 'Mar-19', 'Apr-19', 'May-19', 'Jun-19', 'Jul-19', 'Aug-19', 'Sep-19']
var jans = ['1/1/2016', '1/2/2016', '1/3/2016', '1/4/2016', '1/5/2016', '1/6/2016', '1/7/2016', '1/8/2016', '1/9/2016', '1/10/2016', '1/11/2016', '1/12/2016', '1/13/2016', '1/14/2016', '1/15/2016', '1/16/2016', '1/17/2016', '1/18/2016', '1/19/2016', '1/20/2016', '1/21/2016', '1/22/2016', '1/23/2016', '1/24/2016', '1/25/2016', '1/26/2016', '1/27/2016', '1/28/2016', '1/29/2016', '1/30/2016', '1/31/2016']

document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('chart0', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Hamburger Sales Jan \'18 to Sep \'19'
        },
        yAxis: {
            title: {
                text: 'USD Sales'
            }
        },
        xAxis: {
            tickInterval: 1,
            labels: {
                enabled: true,
                formatter: function() { return dates[this.value];},
            }
        },
        series: [{
            name: 'Northeast',
            data: [1574815, 1688763, 1574816, 1623266, 1672456, 1559609, 1671717, 1654831, 1606160, 1380063, 1551486, 1446801, 1581146, 1503795, 1519140, 1488760, 1596480, 1488759, 1458378, 1502572, 1458379]
        }, {
            name: 'Southwest',
            data: [1607493, 1597750, 1551672, 1605619, 1709237, 1534783, 1587310, 1625106, 1642152, 1351220, 1524624, 1419772, 1499626, 1537661, 1444534, 1524090, 1506271, 1410073, 1379296, 1422314, 1431260]
        }, {
            name: 'Northwest',
            data: [1586799, 1640630, 1532001, 1574000, 1622550, 1569245, 1566687, 1662321, 1618403, 1351293, 1440957, 1343743, 1534569, 1460434, 1474888, 1442209, 1547080, 1446819, 1416344, 1462348, 1472377]
        }, {
            name: 'Southeast',
            data: [1570926, 1545259, 1509031, 1611615, 1601156, 1491366, 1603342, 1574144, 1536130, 1334204, 1417422, 1383670, 1518435, 1432313, 1453373, 1414702, 1470550, 1371090, 1336287, 1386752, 1397616]
        }, {
            name: 'Central',
            data: [1547730, 1517826, 1486792, 1532852, 1580994, 1474712, 1583461, 1543848, 1520076, 1364454, 1451913, 1360520, 1434785, 1416053, 1375864, 1448080, 1500448, 1407434, 1366136, 1416674, 1383228]
        }]
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('chart1', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Chicken Fillet Sales Jan \'18 to Sep \'19'
        },
        yAxis: {
            title: {
                text: 'USD Sales'
            }
        },
        xAxis: {
            tickInterval: 1,
            labels: {
                enabled: true,
                formatter: function() { return dates[this.value];},
            }
        },
        series: [{
            name: 'Northeast',
            data: [656173, 703651, 656173, 676361, 725300, 676361, 669233, 717656, 696549, 579193, 621101, 579193, 632975, 626581, 608152, 620316, 665200, 620316, 583828, 601520, 607658]

        }, {
            name: 'Southwest',
            data: [643522, 665729, 621175, 669008, 684253, 665594, 688374, 704765, 657397, 594662, 635260, 591571, 650348, 615567, 626456, 635037, 627613, 587530, 598164, 616820, 620699]
        }, {
            name: 'Northwest',
            data: [661166, 656788, 638333, 655833, 676062, 653852, 679430, 692634, 647890, 586020, 600398, 559893, 639403, 608514, 590437, 600920, 619337, 579200, 567000, 585417, 589432]
        }, {
            name: 'Southeast',
            data: [628883, 670138, 628762, 645172, 667148, 621402, 641861, 682664, 666178, 555918, 590592, 576529, 607870, 596797, 581824, 613518, 637738, 571287, 556786, 601397, 606109]
        }, {
            name: 'Central',
            data: [644887, 632427, 595202, 638688, 685635, 639543, 659775, 669525, 659216, 546227, 604963, 566883, 597827, 614105, 596676, 603366, 625187, 563433, 546901, 590281, 599869]
        }]
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('chart2', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Fish Fillet Sales Jan \'18 to Sep \'19'
        },
        yAxis: {
            title: {
                text: 'USD Sales'
            }
        },
        xAxis: {
            tickInterval: 1,
            labels: {
                enabled: true,
                formatter: function() { return dates[this.value];},
            }
        },
        series: [{
            name: 'Northeast',
            data: [409773, 422190, 378264, 422380, 435180, 405816, 401540, 413707, 417929, 361700, 387871, 347515, 379785, 375948, 379785, 387381, 383468, 357594, 364594, 360912, 379476]
        }, {
            name: 'Southwest',
            data: [386113, 399437, 387918, 401404, 410552, 399356, 413024, 406276, 410538, 342805, 366208, 341023, 374906, 384415, 375873, 381022, 391937, 352518, 344824, 355578, 372419]
        }, {
            name: 'Northwest',
            data: [381143, 410157, 383000, 409561, 405637, 392311, 391671, 399283, 404600, 351612, 374943, 335935, 383642, 365108, 354262, 360552, 386770, 347520, 340200, 351250, 353659]
        }, {
            name: 'Southeast',
            data: [377330, 402082, 362463, 402903, 400289, 372841, 385116, 409598, 384032, 333551, 368819, 345917, 364722, 372693, 349094, 368111, 367637, 342772, 347707, 360838, 363665]
        }, {
            name: 'Central',
            data: [371758, 394944, 371698, 383213, 411381, 383726, 395865, 385962, 380019, 341113, 362978, 340130, 358696, 368463, 343966, 362020, 360401, 351858, 341534, 340279, 345807]
        }]
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('chartf1', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Fish Fillet Sales Jan \'16 for the Southwest'
        },
        yAxis: {
            title: {
                text: 'USD Sales'
            }
        },
        xAxis: {
            tickInterval: 1,
            labels: {
                enabled: true,
                formatter: function() { return jans[this.value];},
            }
        },
        series: [{
            name: 'Southwest',
            data: [10204, 7316, 8683, 8429, 10085, 9652, 8985, 10985, 7616, 7105, 9506, 8424, 9316, 8832, 10360, 8140, 7152, 9602, 8425, 9944, 9787, 11615, 9015, 7722, 9428, 8632, 9102, 9959, 10941, 7877, 8302]
        }]
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('chartf2', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Fish Fillet Sales Jan \'16 for the Northwest'
        },
        yAxis: {
            title: {
                text: 'USD Sales'
            }
        },
        xAxis: {
            tickInterval: 1,
            labels: {
                enabled: true,
                formatter: function() { return jans[this.value];},
            }
        },
        series: [{
            name: 'Northwest',
            data: [9924, 9028, 8105, 8034, 9879, 9360, 8834, 10639, 8589, 7702, 8566, 8555, 9872, 8617, 10503, 8543, 7177, 9107, 8765, 9474, 9876, 10598, 8058, 7680, 8892, 7952, 8609, 9768, 10364, 8465, 8369]
        }]
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('chartf3', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Fish Fillet Sales Jan \'16 for the Southeast'
        },
        yAxis: {
            title: {
                text: 'USD Sales'
            }
        },
        xAxis: {
            tickInterval: 1,
            labels: {
                enabled: true,
                formatter: function() { return jans[this.value];},
            }
        },
        series: [{
            name: 'Southeast',
            data: [11734, 8005, 7011, 8201, 8874, 9674, 8370, 11630, 6890, 7520, 9312, 7735, 8416, 8826, 11533, 8346, 7647, 8793, 8436, 8426, 8637, 11709, 8189, 7167, 8545, 8565, 8954, 9376, 12241, 7727, 7269]
        }]
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('chartf4', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Fish Fillet Sales Jan \'16 for the Central'
        },
        yAxis: {
            title: {
                text: 'USD Sales'
            }
        },
        xAxis: {
            tickInterval: 1,
            labels: {
                enabled: true,
                formatter: function() { return jans[this.value];},
            }
        },
        series: [{
            name: 'Central',
            data: [11232, 9152, 8406, 7940, 8607, 10228, 8993, 12463, 6799, 7583, 9037, 8418, 9279, 7804, 11764, 9431, 7112, 9250, 7773, 8276, 9376, 12847, 8713, 6881, 9227, 9194, 8185, 10200, 12377, 7632, 7440]
        }]
    });
});