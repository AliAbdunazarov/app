"use strict"

const numberOfSeries=prompt("Qaysi aktyorlarni taniysiz?" , "");

const seriesDB={
    count:{},
    series:{},
    actors:numberOfSeries,
    genres:[],
    privat:false,
    rating:{},
}
 const a = prompt("Oxirgi ko’rgan aktyoringiz?"),
 b=prompt("sizga uning ijrosi yoqdimi?"),
 c=prompt("Oxirgi ko’rgan aktyoringiz?"),
 d=prompt("sizga uning ijrosi yoqdimi?");


 seriesDB.rating [a] = b;
 seriesDB.rating [c] = d;

 console.log(seriesDB);

