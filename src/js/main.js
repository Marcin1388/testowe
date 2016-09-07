var app = angular.module('start', ['ngMaterial']);

app.controller('firstCtrl', function ($scope) {
    $scope.tekst = "Dziala ! :)";

    $scope.users = [
        {
            name : 'Marcin',
            imgPath : 'img/svg/avatar-1.svg',
            content : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et dolor nec magna elementum ornare. Phasellus volutpat nibh porta, dignissim nisl vel, volutpat nibh. Morbi sit amet sem sed leo bibendum consequat nec vel dui. Nulla facilisi. In in lorem ac quam auctor imperdiet eu id velit. Proin eu congue est. Quisque non metus vestibulum arcu commodo sagittis eget a purus. Duis tincidunt erat in odio sollicitudin pellentesque. Donec ornare ultricies ultrices. Cras sollicitudin porttitor leo, a imperdiet dui iaculis eget. Aliquam erat volutpat. Duis convallis blandit volutpat. Sed eget pellentesque ipsum. Suspendisse scelerisque nec dolor in pellentesque. '
        },
        {
            name : 'Janek',
            imgPath : 'img/svg/avatar-4.svg',
            content : ' Aliquam congue efficitur dui, ac volutpat mi semper a. Nam scelerisque condimentum suscipit. Nunc malesuada eu purus quis congue. Cras mi urna, accumsan a neque non, interdum ornare neque. Donec orci eros, lacinia non sodales eget, accumsan ac metus. Etiam sem tellus, ornare pretium feugiat quis, finibus non magna. Suspendisse vel augue non risus tempor bibendum. Vestibulum sit amet nibh faucibus, finibus dolor nec, feugiat dui. Nunc sed ultrices nunc, vel bibendum nisl. Nam dapibus gravida eros in consectetur. Maecenas pulvinar a mauris vitae aliquam. Ut vestibulum augue vel nisl eleifend varius. Etiam ullamcorper at tortor id hendrerit. Nullam malesuada tincidunt nibh, vitae varius ante. Fusce vitae rutrum neque. Proin dui est, malesuada at lectus ac, consectetur faucibus erat. '
        }
    ];


});