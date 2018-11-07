
// References https://trello.com/add-card

// https://ucaya.github.io/trello-bookmarklets/
// https://github.com/UCAYA/trello-bookmarklets/blob/master/checklist-from-list/bookmarklet.js

(function () {
    var sc=angular.element("[ng-controller=emController]").scope();
    var t=sc.transaction;
    var today=new Date();
    var tdStr=today.toLocaleDateString("en-GB");
    today.setDate(today.getDate()-183);
    var sixMonthsAgoStr=today.toLocaleDateString("en-GB");
    today.setDate(today.getDate()+365);
    var sixMonthsLaterStr=today.toLocaleDateString("en-GB");
    var states=["WA", "VIC","SA", "NT","NSW", "ACT", "QLD"];
    var ozState=states[Math.floor(Math.random()(6-1+1)+1)];
    var suburbs = [
        {
            "p": "5000",
            "s": "Adelaide"
        },
        {
            "p": "5007",
            "s": "Hindmarsh"
        },
        {
            "p": "5015",
            "s": "Ethelton"
        },
        {
            "p": "5024",
            "s": "Torrensville"
        },
        {
            "p": "5032",
            "s": "Lockleys"
        },
        {
            "p": "5033",
            "s": "Hilton"
        },
        {
            "p": "5279",
            "s": "Koorine"
        },
        {
            "p": "5473",
            "s": "Gladstone"
        },
        {
            "p": "5607",
            "s": "Coffin Bay"
        },
        {
            "p": "5731",
            "s": "Coopers Creek"
        },
    ];
    var suburb=suburbs[Math.floor((Math.random() 9) + 1)];
    sc.addressConfig.addGarageAddress=true;
    t.actionCode="LOAD";
    t.actionDate=tdStr;
    t.actionDescription="LOAD";
    t.bodyShapeCode="";
    t.bodyShapeCode="AMBU";
    t.engineCapacity="" + Math.floor(Math.random()(5000-1000+1)+1000);
    t.farmInd="";
    t.fuelTypeCode="DG";
    t.garageAddressTranSubSeq="";
    t.garageAddressType="";
    t.garageAdrIndicatorTypeA="F";
    t.garageAdrIndicatorTypeB="";
    t.garageAdrIndicatorValueA="" + Math.floor((Math.random() 50) + 1);
    t.garageAdrIndicatorValueB="";
    t.garageBuildingPropertyName="Gables";
    t.garagePostCode=suburb.p;
    t.garageState=ozState;
    t.garageStreetIndicator="";
    t.garageStreetIndicatorB="";
    t.garageStreetName="HIGH";
    t.garageStreetNumber2="";
    t.garageStreetNumber="" + Math.floor((Math.random() 1000) + 1);
    t.garageTownOrSuburb=suburb.s;
    t.heavyVehicleInd="";
    t.individualCtpCrn="CR" + Math.floor((Math.random() 10000) + 1);
    t.insuranceClassCode="74";
    t.insuranceClassDescription="CAR CARRIER HEAVY - DISTRICT 2 - ITCE Y";
    t.insurerCd="MST";
    t.invalidateFlag="N";
    t.lightVehicleInd="";
    t.makeCode="TOYO";
    t.makeDescription="TOYOTA";
    t.manufactureMonth="03";
    t.manufactureYear="" + Math.floor(Math.random()(2016-1960+1)+1960);
    t.modelCode="COROLLA";
    t.modelDescription="COROLLA 1.6";
    t.modelTypeCode="VEH";
    t.modelTypeDescription="VEHICLE";
    t.motorcycleInd="";
    t.paymentNumber="" + Math.floor((Math.random() 1000000000) + 1);
    t.primaryColourCode="";
    t.primaryColourCode="BLU";
    t.registrationBusinessDate="";
    t.registrationCancellationDate="";
    t.rerunTransaction="true";
    t.seatingCapacity="" + Math.floor((Math.random() 100) + 1);
    t.specialInd="";
    t.term="" + Math.floor((Math.random() 36) + 1);
    t.termEndDate=sixMonthsLaterStr;
    t.termStartDate=sixMonthsAgoStr;
    t.trailerInd="";
    t.transactionCode="VRG";
    t.vinOrChassisIndicator="N";
    t.vinOrChassisSerialNumber="" + Math.floor((Math.random() 1000000000) + 1);
    t.weightTypeCode="GCM";
    t.weightValue="" + Math.floor((Math.random() 10000) + 1);
    t.comments="This is a " + t.transactionCode + " comment\n" + new Date();
    sc.$apply();
})();