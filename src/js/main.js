angular.module('start', ['ngMaterial'])
    .config(function ($mdIconProvider) {
        $mdIconProvider.defaultIconSet('./img/svg/avatars.svg', 128);
        $mdIconProvider.icon('share', './img/svg/share.svg', 24);
        $mdIconProvider.icon('menu', './img/svg/menu.svg', 24);
    })
    .controller('firstCtrl', function ($mdBottomSheet, $mdSidenav) {
        this.tekst = "It's Working ! :)";

        this.users = [
            {
                name: 'Marcin',
                imgPath: 'svg-1',
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et dolor nec magna elementum ornare. Phasellus volutpat nibh porta, dignissim nisl vel, volutpat nibh. Morbi sit amet sem sed leo bibendum consequat nec vel dui. Nulla facilisi. In in lorem ac quam auctor imperdiet eu id velit. Proin eu congue est. Quisque non metus vestibulum arcu commodo sagittis eget a purus. Duis tincidunt erat in odio sollicitudin pellentesque. Donec ornare ultricies ultrices. Cras sollicitudin porttitor leo, a imperdiet dui iaculis eget. Aliquam erat volutpat. Duis convallis blandit volutpat. Sed eget pellentesque ipsum. Suspendisse scelerisque nec dolor in pellentesque. '
            },
            {
                name: 'Janek',
                imgPath: 'svg-10',
                content: ' Aliquam congue efficitur dui, ac volutpat mi semper a. Nam scelerisque condimentum suscipit. Nunc malesuada eu purus quis congue. Cras mi urna, accumsan a neque non, interdum ornare neque. Donec orci eros, lacinia non sodales eget, accumsan ac metus. Etiam sem tellus, ornare pretium feugiat quis, finibus non magna. Suspendisse vel augue non risus tempor bibendum. Vestibulum sit amet nibh faucibus, finibus dolor nec, feugiat dui. Nunc sed ultrices nunc, vel bibendum nisl. Nam dapibus gravida eros in consectetur. Maecenas pulvinar a mauris vitae aliquam. Ut vestibulum augue vel nisl eleifend varius. Etiam ullamcorper at tortor id hendrerit. Nullam malesuada tincidunt nibh, vitae varius ante. Fusce vitae rutrum neque. Proin dui est, malesuada at lectus ac, consectetur faucibus erat. '
            },
            {
                name: 'Eryk',
                imgPath: 'svg-11',
                content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et dolor nec magna elementum ornare. Phasellus volutpat nibh porta, dignissim nisl vel, volutpat nibh. Morbi sit amet sem sed leo bibendum consequat nec vel dui. Nulla facilisi. In in lorem ac quam auctor imperdiet eu id velit. Proin eu congue est. Quisque non metus vestibulum arcu commodo sagittis eget a purus. Duis tincidunt erat in odio sollicitudin pellentesque. Donec ornare ultricies ultrices. Cras sollicitudin porttitor leo, a imperdiet dui iaculis eget. Aliquam erat volutpat. Duis convallis blandit volutpat. Sed eget pellentesque ipsum. Suspendisse scelerisque nec dolor in pellentesque. '
            }
        ];

        this.currUser = this.users[0];

        this.setCurrentUser = function (user) {
            this.currUser = user;
            console.log('CURRENT: ' + this.currUser.name);
        };

        this.getCurrentUser = function () {
            return this.currUser;
        };

        this.openBottomSheet = function () {
            console.log('CURRENT BOTTOM: ' + this.currUser.name);
            $mdBottomSheet.show({
                controller: "firstCtrl",
                controllerAs: "fCtrl",
                templateUrl: "./template/userBottomTemp.html",
                $viewChangeListeners: true,
                parent: angular.element(document.querySelector('#content'))
            });
        };

        this.toggleLeftSidenav = function() {
            $mdSidenav('leftSidenav').toggle();
        }

    })


    .directive('showUserInformation', function () {
        return {
            restrict: 'AE',
            scope: {
                user: '='
            },
            templateUrl: './template/userTmp.html'
        }
    });