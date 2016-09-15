/**
 * Created by marcinp on 14.09.16.
 */
app.controller('detailController', function ($routeParams, mountainList) {
    this.detail = mountainList.getById($routeParams.id);
    // this.detail = mountainList.getById(2);
});