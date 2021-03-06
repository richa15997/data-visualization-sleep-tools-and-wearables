//function to plot graph between exertion and hours of weekday
function weekday1(){
    

var selection1=document.getElementById("selection1").value;
//console.log(selection1)
var dselection1=document.getElementById(selection1).value;
//console.log(dselection1);
var csvFile1 = "../csv_files/" + dselection1 + "_weekday.csv";

    
     
  
    d3.csv(csvFile1,function(err,data){
         var m = [80, 80, 80, 80]; // margins
    var w = 1000 - m[1] - m[3]; // width
    var h = 400 - m[0] - m[2]; // height
    
      var ticks = [];
      
      //get each key of the data (key=rest,light,moderate,vigorous)
      //these will be our key in the key/value pair
      //the values x and y will be hour and the value
      var dataToPlot = Object.keys(data[0]).filter(function(k){return k!="start_time"})
        .map(function(k){
          return {"key":k,"values":data.map(function(d){
           return {
            
             "x":d.start_time,//d3.time.format('%H:%M'),
             "y":+d[k]
           }
          })}
        })
         nv.addGraph(function() {
        var chart = nv.models.multiBarChart()
        
          .showControls(true)  
          .stacked(true)
         
       .showControls(false)
       .staggerLabels(true)
       
        ;
          chart.tooltip.contentGenerator(function(d){
				          var html = "<div class='panel-body'><h5 style='color:"+d.color+"'>Time: <b>"+d.value+"</b></h5>";
				          d.series.forEach(function(elem){
								
										
			                   html += "<h5 style='color:"+elem.color+"'>Activity hours: <b>"+elem.value+"</b></h5>";}
										
				          )
				          html += "</div>";
				          return html;
				        });
      

    chart.reduceXTicks(false);

         chart.xAxis
            .axisLabel("Hours")
            .axisLabelDistance(5)
            .showMaxMin(false)
         
        ;
          chart.yAxis
            .axisLabel("Activity Level")
            .axisLabelDistance(-5)
            .tickFormat(d3.format(',.01f'))
         

        ;
       chart.color(['#1f77b4', '#aec7e8', '#ffbb78','#ff7f0e']);				
       
        d3.select('#activity_weekday1 svg')
            .datum(dataToPlot)
            .call(chart);
            
    
        nv.utils.windowResize(chart.update);
   
    
            
       
        return chart;
     
         });
    });
  
         
}
function weekday2(){ 
   
//obtain data from second file of drop-down menu
var selection2=document.getElementById("selection2").value;

//console.log(selection2);
var dselection2=document.getElementById(selection2).value;
//console.log(dselection2);
var csvFile2 = "../csv_files/" + dselection2 + "_weekday.csv";

    
     
  
    d3.csv(csvFile2,function(err,data){
         var m = [80, 80, 80, 80]; // margins
    var w = 1000 - m[1] - m[3]; // width
    var h = 400 - m[0] - m[2]; // height
    
      var ticks = [];
      
      var dataToPlot = Object.keys(data[0]).filter(function(k){return k!="start_time"})
        .map(function(k){
          return {"key":k,"values":data.map(function(d){
           return {
          
             "x":d.start_time,//d3.time.format('%H:%M'),
             "y":+d[k]
           }
          })}
        })
         nv.addGraph(function() {
        var chart = nv.models.multiBarChart()
        
          .showControls(true)   
          .stacked(true)
       .showControls(false)
       .staggerLabels(true)
       
        ;
                 chart.color(['#1f77b4', '#aec7e8', '#ffbb78','#ff7f0e']);			
          chart.tooltip.contentGenerator(function(d){
				          var html = "<div class='panel-body'><h5 style='color:"+d.color+"'>Time: <b>"+d.value+"</b></h5>";
				          d.series.forEach(function(elem){
								
										/*if (elem.value<60)
										{
									html += "<h5 style='color:"+elem.color+"'>Activity minutes: <b>"+elem.value+"</b></h5>";
										}
										else{ 
											elem.value=(elem.value)/60;
										elem.value=elem.value.toFixed(1);*/
			                   html += "<h5 style='color:"+elem.color+"'>Activity hours: <b>"+elem.value+"</b></h5>";}
										
				          )
				          html += "</div>";
				          return html;
				        });
          
    chart.reduceXTicks(false);
         chart.xAxis
            .axisLabel("Hours")
            .axisLabelDistance(5)
            .showMaxMin(false)
           ;
          chart.yAxis
            .axisLabel("Activity Level")
            .axisLabelDistance(-5)
            .tickFormat(d3.format(',.01f'))
        ;
       
        d3.select('#activity_weekday2 svg')
            .datum(dataToPlot)
            .call(chart);
            
    
        nv.utils.windowResize(chart.update);
   
    
            
      
        return chart;
     
         });
    });
  
        
}

