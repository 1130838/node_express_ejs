$(function () {
        // your jquery goes here
        $('#btn_randomNumberResult').html('00'); // put 0 as default value
        $('#btn_randomNumber').click(function () {
            console.log('ive been clicked');
            $('#btn_randomNumberResult').html(getRandomNumber());

        });


        function getRandomNumber() {

            return Math.floor(Math.random() * 100);
        }

    }
);

