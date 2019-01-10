module.exports = function () {
    console.log(1);
    console.log($);


// //Dropdown plugin data
    var ddData = [
        {
            text: "Rus",
            value: 1,
            selected: true,
            image: "../../../../svg/rectangle 2.svg"
        },
        {
            text: "Eng",
            value: 2,
            selected: false,
            imageSrc: "http://i.imgur.com/8ScLNnk.png"
        }
    ];

    // $(function(){
    //     console.log(ddData);
    // });
//
    $('#demoBasic').ddslick({
        data: ddData,
        width: 300,
        imagePosition: "left",
        selectText: "Select your favorite social network",
        onSelected: function (data) {
            console.log(data);
        }
    });
};
