audio = new Audio("./assests/starwars.mp3");
var buttonholder;
var button;
var crawl;
var map, bar, timeline, text;
var countryMovieData = [];

var tfaDesc = 'The Force Awakens was a box office breaking success, becoming the highest grossing film of all time after its release. \
All Star War films prior to this had come out in May, although Disney had the idea to release in December, meaning there was not a lot \
of competition, and everyone was with family and could go see it together. This also made Christmas time Star Wars time for the next three years. \
Young people were excited for a new Star Wars movie, and those who had grown up with the films were excited to see where their beloved characters \
had ended up. It was a perfect storm for a huge success.';
var r1Desc = 'Rogue One was a solid Star Wars film. It had a good story, some great action set pieces, and a diverse cast to draw in an \
audience. It did not perform as well as The Force Awakens, although that seemed impossible as it took Avengers: Endgame, to overthrow it. \
Rogue One still stood well however, likely because of its cast. Two cast members, Donnie Yen and Jiang Wen, drew a Chinese audience that \
brought in box office numbers not seen from China in Star Wars movies afterwards. Diego Luna also drew a Mexican audience, allowing for the \
Mexico box office to remain at a similar standing as The Last Jedi, and above Solo.';
var tljDesc = 'The Last Jedi was seen as quite a polarizing film. All online discussions seemed to gravitate torwards either loving it, or \
absolutely hating it, with no in between. Regardless of what the side you are on, it is clear that it did not perform as well as the recent Star \
Wars films before it. It performed worse in the USA than Rogue One, and it made just over half of what The Force Awakens made, surprising for a \
midway point in this epic saga. Overall, it may have been because while Rogue One was a self contained story, and Force Awakens set up many questions \
and possibilities for the trilogy to go, The Last Jedi did not capitalize on the opportunities it had been given, and resulted in a story where not \
a lot occurred until the very end.';
var soloDesc = 'Solo, like The Last Jedi, was another Star Wars film that began to perform less impressively as the box. While its gross is still \
impressive, it is nothing like its predecessors in this generation of Star Wars. Solo was also timed incredibly strangely. Instead of waiting a year \
between movies, Solo was released only five months after The Last Jedi, and it was released alongside Avengers: Infinity War and Deadpool 2, so it had \
major competition. It also broke the Christmas Star Wars streak, which was another odd choice for Disney to make.';

var movieData = {
    tfa:  {'United States': 936662225, 'Argentina': 8650249, 'Australia': 67219352, 'Austria': 9070862, 'Belgium': 10978138, 'Bolivia': 1868562, 'Brazil': 27982312, 'Bulgaria': 2261855, 'Cambodia': 169976, 'Central America': 6804078, 'Chile': 8312477, 'China': 120220000, 'Colombia': 9130293, 'Croatia': 1245788, 'Czech Republic': 3846700, 'Denmark': 11965142, 'Ecuador': 3211683, 'Egypt': 153648, 'Finland': 7815008, 'France': 82531280, 'Germany': 109709280, 'Greece': 3406287, 'Hong Kong': 11048604, 'Hungary': 6445986, 'Iceland': 863721, 'Indonesia': 8876120, 'Iraq': 77124, 'Israel': 3385097, 'Italy': 27813156, 'Japan': 95468056, 'Kenya': 285657, 'Kuwait': 732476, 'Latvia': 414134, 'Lebanon': 606176, 'Lithuania': 558181, 'Malaysia': 6627347, 'Mexico': 27649496, 'Netherlands': 15336444, 'New Zealand': 9842721, 'Norway': 1100000, 'Oman': 45986, 'Peru': 6127657, 'Philippines': 8163463, 'Poland': 16323223, 'Portugal': 4049362, 'Romania': 3237704, 'Russia': 26689556, 'Serbia and Montenegro': 711089, 'Singapore': 7173581, 'Slovakia': 1089747, 'Slovenia': 577440, 'South Africa': 3111568, 'South Korea': 24112820, 'Spain': 35980308, 'Sweden': 21289424, 'Switzerland': 12159927, 'Taiwan': 6457562, 'Thailand': 4458518, 'Turkey': 5513572, 'Ukraine': 2896101, 'United Arab Emirates': 6060045, 'United Kingdom': 163608625, 'Uruguay': 468960, 'Venezuela': 16505641, 'Vietnam': 895542},
    r1:  {'United States': 620181382, 'Argentina': 3695360, 'Australia': 37481196, 'Brazil': 14600000, 'Bulgaria': 980409, 'China': 69484896, 'Czech Republic': 1583853, 'Denmark': 6100000, 'France': 39366912, 'Germany': 46603040, 'Hong Kong': 5000000, 'Indonesia': 3200000, 'Italy': 10866280, 'Japan': 39164664, 'Lithuania': 216524, 'Mexico': 11409999, 'Netherlands': 7888694, 'New Zealand': 5081349, 'Philippines': 2700000, 'Poland': 8159017, 'Portugal': 1681718, 'Russia': 11409243, 'Slovakia': 484299, 'Slovenia': 244190, 'South Korea': 7512870, 'Spain': 16685342, 'Sweden': 11000000, 'Turkey': 1748618, 'United Kingdom': 81837978},
    tlj:  {'United States': 532177324, 'Argentina': 5372661, 'Australia': 44875768, 'Belgium': 0, 'Brazil': 19108918, 'Bulgaria': 1804811, 'Cambodia': 0, 'Chile': 0, 'China': 41200000, 'Colombia': 0, 'Croatia': 0, 'Cyprus': 0, 'Czech Republic': 3832537, 'Denmark': 11000000, 'Estonia': 0, 'Finland': 0, 'France': 64974040, 'Germany': 83164496, 'Greece': 0, 'Hong Kong': 5618798, 'Hungary': 0, 'India': 1458333, 'Indonesia': 5223333, 'Ireland': 0, 'Israel': 0, 'Italy': 18138020, 'Japan': 66662688, 'Kuwait': 0, 'Lithuania': 394950, 'Malaysia': 0, 'Mexico': 13590940, 'Netherlands': 12944717, 'New Zealand': 6244816, 'Norway': 1500000, 'Pakistan': 0, 'Philippines': 0, 'Poland': 12990972, 'Portugal': 3285750, 'Romania': 0, 'Russia': 16068138, 'Serbia and Montenegro': 0, 'Singapore': 0, 'Slovakia': 1022454, 'Slovenia': 0, 'South Africa': 0, 'South Korea': 7981958, 'Spain': 25847888, 'Sweden': 15800000, 'Taiwan': 3534284, 'Turkey': 2653217, 'Ukraine': 0, 'United Kingdom': 111883703, 'Vietnam': 0},
    solo:  {'United States': 213767512, 'Argentina': 904099, 'Australia': 12937598, 'Brazil': 3618076, 'Bulgaria': 421718, 'China': 16600000, 'Czech Republic': 904395, 'France': 11329702, 'Germany': 16957284, 'Hong Kong': 953218, 'India': 300771, 'Indonesia': 1773295, 'Italy': 5255534, 'Japan': 18919408, 'Lithuania': 68836, 'Mexico': 4935067, 'Netherlands': 2904945, 'New Zealand': 1967420, 'Poland': 3611467, 'Portugal': 768733, 'Russia': 6042127, 'Slovakia': 264899, 'South Korea': 1822472, 'Spain': 7247916, 'Sweden': 2800000, 'Taiwan': 980802, 'Turkey': 494543, 'United Kingdom': 25840048},
}

var movieInfo = {
    'tfa': {
        slice: 62,
        name: 'The Force Awakens',
        index: 0,
        source: 'https://www.the-numbers.com/movie/Star-Wars-Ep-VII-The-Force-Awaken',
        topFive: {
            categories: ["United States", "United Kingdom", "China", "Germany", "Japan"],
            values: [936662225, 163608625, 120220000, 109709280, 95468056]
        },
        desc: tfaDesc
    },
    'r1': {
        slice: 29,
        name: 'Rogue One',
        index: 1,
        source: 'https://www.the-numbers.com/movie/Rogue-One-A-Star-Wars-Story',
        topFive: {
            categories: [],
            values: []
        },
        desc: r1Desc
    },
    'tlj': {
        slice: 51,
        name: 'The Last Jedi',
        index: 2,
        source: 'https://www.the-numbers.com/movie/Star-Wars-Ep-VIII-The-Last-Jedi',
        topFive: {
            categories: [],
            values: []
        },
        desc: tljDesc
    },
    'solo': {
        slice: 27,
        name: 'Solo',
        index: 3,
        source: 'https://www.the-numbers.com/movie/Solo-A-Star-Wars-Story',
        topFive: {
            categories: [],
            values: []
        },
        desc: soloDesc
    }
}

// ONLOAD
window.onload = function () {
    buttonholder = this.document.getElementById('begin');
    button = this.document.getElementById('start');
    crawl = this.document.getElementById('crawl');
    text = this.document.getElementById('textcontainer');

    // MAPCHART
    Highcharts.data({
        googleSpreadsheetKey: '1WBx3mRqiomXk_ks1a5sEAtJGvYukguhAkcCuRDrY1L0',

        // Custom handler when the spreadsheet is parsed
        parsed: function (columns) {
            button.style.display = "inline-block";
            console.log('read');
            // Read the columns into the data array
            var data = [];
            Highcharts.each(columns[0], function (code, i) {
                data.push({
                    code: code.toUpperCase(),
                    value: parseFloat(columns[2][i]),
                    name: columns[1][i]
                });
            });

            countryCode = {}
            for (var key in data) {
                countryCode[data[key].name] = data[key].code 
            }

            countryMovieData = []
            for (var key in movieData) {
                var toPush = []
                for (var key2 in movieData[key]) {
                    name = key2;

                    if (key2 === "Hong Kong") name = "Hong Kong SAR, China";
                    if (key2 === "Russia") name = "Russian Federation";
                    if (key2 === "Slovakia") name = "Slovak Republic";
                    if (key2 === "South Korea") name = "Korea, Rep.";
                    if (key2 === "Egypt") name = "Egypt, Arab Rep.";
                    if (key2 === "Venezuela") name = "Venezuela, RB"
                    if (key2 === "Taiwan") continue;
                    if (key2 === "Serbia and Montenegro") continue;
                    if (key2 === "Central America") continue;

                    toPush.push({
                        code: countryCode[name], 
                        value: movieData[key][key2],
                        name: name
                    });
                }
                countryMovieData.push(toPush.sort(function(a,b){
                    return -1 * (a.value - b.value);
                }));
            }

            for (var movie in movieInfo) {
                for (var count = 0; count < 5; count++) {
                    movieInfo[movie].topFive.categories.push(countryMovieData[movieInfo[movie].index][count].name);
                    movieInfo[movie].topFive.values.push(countryMovieData[movieInfo[movie].index][count].value);
                }
            }

            // Initiate the chart
            map = Highcharts.mapChart('mapcontainer', {
                chart: {
                    map: 'custom/world',
                    borderWidth: 1,
                    backgroundColor: null
                },

                title: {
                    text: 'Total Box Office for The Force Awakens by Country'
                },

                mapNavigation: {
                    enabled: true
                },

                legend: {
                    title: {
                        text: 'Box Office Earnings',
                        style: {
                            color: ( // theme
                                Highcharts.defaultOptions &&
                                Highcharts.defaultOptions.legend &&
                                Highcharts.defaultOptions.legend.title &&
                                Highcharts.defaultOptions.legend.title.style &&
                                Highcharts.defaultOptions.legend.title.style.color
                            ) || 'black'
                        }
                    },
                    align: 'left',
                    verticalAlign: 'bottom',
                    floating: true,
                    layout: 'vertical',
                    valueDecimals: 0,
                    backgroundColor: ( // theme
                        Highcharts.defaultOptions &&
                        Highcharts.defaultOptions.legend &&
                        Highcharts.defaultOptions.legend.backgroundColor
                    ) || 'rgba(255, 255, 255, 0.85)',
                    symbolRadius: 0,
                    symbolHeight: 14
                },

                colorAxis: {
                    dataClassColor: 'category',
                    dataClasses: [{
                        to: 100000
                    }, {
                        from: 100000,
                        to: 500000
                    }, {
                        from: 500000,
                        to: 1000000
                    }, {
                        from: 1000000,
                        to: 5000000
                    }, {
                        from: 5000000,
                        to: 10000000
                    }, {
                        from: 10000000,
                        to: 20000000
                    }, {
                        from: 20000000,
                        to: 100000000
                    }, {
                        from: 100000000,
                        to: 500000000
                    }, {
                        from: 500000000
                    }]
                },
                colors: ['#942015', '#b02f25', '#d9513f', '#ff5c47', '#c9ff9d', '#b9eb91', '#abd986', '#9bc479', '#81a666'],
                series: [{
                    data: countryMovieData[0],
                    joinBy: ['iso-a3', 'code'],
                    animation: true,
                    name: 'Box Office',
                    states: {
                        hover: {
                            color: '#a4edba'
                        }
                    },
                    tooltip: {
                        valuePrefix: '$'
                    }
                }]
            });

            bar = Highcharts.chart('barcontainer', {
                chart: {
                    type: 'bar',
                    backgroundColor: null
                },
                title: {
                    text: 'Top 5 Box Office Earners for '
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: [],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Box Office Gross',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valuePrefix: '$'
                },
                plotOptions: {
                    bar: {
                        colors: ['#abd986', '#ff5c47', '#ff5c47', '#ff5c47', '#ff5c47'],
                        dataLabels: {
                            enabled: true,
                            formatter: function() {return '$' + Highcharts.numberFormat(this.y,0);}
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                series: [{
                    type: 'bar',
                    data: []
                }]
            });

            timeline = Highcharts.chart('timelinecontainer', {
                chart: {
                    type: 'timeline',
                    backgroundColor: null
                },
                plotOptions: {
                    series: {
                        point: {
                            events: {
                                mouseOver: function() {
                                    updateData(this.id);
                                }
                            }
                        }
                    }
                },
                xAxis: {
                    type: 'datetime',
                    visible: false
                },
                yAxis: {
                    visible: false
                },
                title: {
                    text: 'Timeline of Recent Star Wars Films'
                },
                subtitle: {
                    text: 'Info source: <a href="https://en.wikipedia.org/wiki/Star_Wars">www.wikipedia.org</a>'
                },
                colors: [
                    '#4185F3',
                    '#427CDD',
                    '#406AB2',
                    '#3E5A8E',
                    '#3B4A68',
                    '#363C46'
                ],
                series: [{
                    data: [{
                        x: Date.UTC(2015, 11, 18),
                        name: 'The Force Awakens',
                        label: 'December 2015',
                        description: '',
                        id: 'tfa'
                    }, {
                        x: Date.UTC(2016, 11, 16),
                        name: 'Rogue One',
                        label: 'December 2016',
                        description: '',
                        id: 'r1'
                    }, {
                        x: Date.UTC(2017, 11, 15),
                        name: 'The Last Jedi',
                        label: 'December 2017',
                        description: '',
                        id: 'tlj'
                    }, {
                        x: Date.UTC(2018, 4, 25),
                        name: 'Solo',
                        label: 'May 2018',
                        description: '',
                        id: 'solo'
                    }]
                }]
            });
        },
        error: function () {
            document.getElementById('mapcontainer').innerHTML = '<div class="loading">' +
                '<i class="icon-frown icon-large"></i> ' +
                'Error loading data from Google Spreadsheets' +
                '</div>';
        }
    });

    // CRAWL
    button.onclick = function() {
        button.style.display = "none";
        buttonholder.style.display = "none";
        crawl.style.display = "inline";
        audio.play();
        sleep(25000).then(() => {
            fade();
        });
    }

    function updateData(movie) {
        var totalData = movieInfo[movie];
        var newData = countryMovieData[totalData.index].slice(0, movieInfo[movie].slice);
        var cats = totalData.topFive.categories;
        var vals = totalData.topFive.values.slice(0, 5);
    
        map.series[0].setData(newData);
        map.setTitle({text: 'Total Box Office for ' + totalData.name + ' by Country'});

        bar.series[0].setData(vals);
        bar.xAxis[0].categories = cats;
        bar.xAxis[0].redraw();
        bar.redraw();
        bar.setTitle({text: 'Top 5 Box Office Earners for ' + totalData.name})
        bar.setSubtitle({text: 'Source: ' + totalData.source});

        text.innerHTML = "<h1>Summary</h1><br>" + totalData.desc;
    }
    
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    
    function fade(){
        try {
            audio.volume -= 0.1;
            setTimeout(fade, 250);
            // setTimeout(fade, 00);
        } catch (e) {
            updateData('tfa');
            audio.pause();
            crawl.style.display = "none";
            document.body.style.background = "#faf5f1";
        }
    }
}