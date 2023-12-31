let packageDetails = [
    {
        "packageId":"PKG001",
        "images": {
            "image-1": "",
            "image-2": "",
            "image-3": "",
            "image-4": "",
            "image-5": "",
        },
        "packageTopic": "08 Night / 09 Days Culture Adventure",
        "itinerary": [
            {
                "day": 1,
                "fromTo": "galle to colombo",
                "description": "kddkccccccccccccccccccccccccdk"
            },
            {
                "day": 1,
                "fromTo": "galle to colombo",
                "description": "kddkccccccccccccccccccccccccdk"
            },
            {
                "day": 1,
                "fromTo": "galle to colombo",
                "description": "kddkccccccccccccccccccccccccdk"
            },
            {
                "day": 1,
                "fromTo": "galle to colombo",
                "description": "kddkccccccccccccccccccccccccdk"
            },
            {
                "day": 1,
                "fromTo": "galle to colombo",
                "description": "kddkccccccccccccccccccccccccdk"
            },
            {
                "day": 1,
                "fromTo": "galle to colombo",
                "description": "kddkccccccccccccccccccccccccdk"
            },
        ],
        "tourDetails":{
            "PackageType":"Culture Adventure",
            "PackageDuration":"8 Nights / 9 Days",
            "Locations":"Dambulla Golden Rock Temple - Mirissa Beach - Sigiriya Rock Fortress - Temple Of The Tooth Relic - Yala National Park - Half Day Jeep Safari",
            "peopleCount":"2 ADULT",
        },
        "price":1200
    }
]

$(".details-btn").click(function () {
   let packageId=$(this).attr("value");
   $("#home-section,#offers-section,#why-choose-section,#transport-section,#feedback-section").css("display","none");
   $("#package-details-page").css("display","flex");
});

function searchPackageDetails(packageId) {
    for (let i = 0; i < packageDetails.length; i++) {
        if (packageDetails[i].packageId===packageId){
            return i;
        }
    }
}