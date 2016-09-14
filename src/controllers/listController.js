/**
 * Created by marcinp on 12.09.16.
 */
// app.controller('listController', function ($scope, mountainList) {
app.controller('listController', function (mountainList) {
    this.mountains = mountainList.getAll();

});

app.factory('mountainList', function () {
    var mountains = [
        {id: "1", mountain: "Mount Everest", metres: 8850, country: 'Nepal-China'},
        {id: "2", mountain: "K2", metres: 8611, country: 'Pakistan-China'},
        {id: "3", mountain: "Kangczendzonga", metres: 8598, country: 'Nepal-India'},
        {id: "4", mountain: "Lhotse", metres: 8501, country: 'Nepal-China'},
        {id: "5", mountain: "Makalu", metres: 8463, country: 'Nepal-China'},
        {id: "6", mountain: "Cho Oyu", metres: 8201, country: 'Nepal-China'},
        {id: "7", mountain: 'Dhaulagiri', metres: 8167, country: 'Nepal'},
        {id: "8", mountain: 'Manaslu', metres: 8163, country: 'Nepal'},
        {id: "9", mountain: 'Nanga Parbat', metres: 8125, country: 'Pakistan'},
        {id: "10", mountain: 'Annapurna', metres: 8091, country: 'Nepal'},
        {id: "11", mountain: 'Shishapangma', metres: 8012, country: 'China'}
    ];

    return {
        getAll: function () {
            return mountains;
        },
        getById: function (id) {
            var result = null;
            angular.forEach(mountains, function (m) {
                if (m.id == id) {
                    result = m;
                }
            });
            return result;
        }
    };

});

app.controller('detailController', function ($routeParams, mountainList, $location) {
    this.detail = mountainList.getById($routeParams.id);
});