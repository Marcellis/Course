// definitie van de weken
var weeks = ["Study manual", "Android User Interface", "Android Activities", "Android Recycler View", "Android SQLite",  "Assignment", "Android Fragments", "Android Content Provider"];

// definitie van de opdrachten
var weekObject = {
      week0: ["Learning outcomes and Prerequisites", "Examination", "Programme", "Study guide", "Prepare for the Oral exam"]
    , week1: ["Shopping List (novice)", "Picture quiz  (novice)"]
    , week2: ["Basket of Fruit (novice)", "Student Portal (novice)"]
    , week3: ["Series app (novice)","Places apps (novice)" ] 
    , week4: ["Homework app (novice)", "Game backlog (novice)"]
    , week5: ["Assignment Mobile Design Case"]
    , week6: ["Animal viewer (professional)", "Recipe app (professional)", ]
    , week7: ["My Devices app  (expert)", "My places app (expert)"]
};

$(document).on("pageinit", function () {

    //Initieren van de panels
    $("[data-role='panel']").panel();
    //Initieren van header en footer
    $('#myHeader').toolbar();
    $('#myFooter').toolbar();
});

$(document).on("pagebeforeshow", function () {

    // toevoegen van de week omschrijvingen in de frontpage
    for (i = 0; i < weeks.length; i++) {
        $("#week" + i).text(weeks[i]);
        // toevoegen van de assignmentomschrijvingen van de pagina's
        for (j = 0; j < weekObject[("week" + i)].length; j++) {
            var a = "#p" + i + (j + 1);
            $(a).text(weekObject[("week" + i)][j]);
        }
    }

    var page = '';
    var task = '';
    var weeknr = '';

    //Wat is de huidige pagina
    var pagetask = $.mobile.pageContainer.pagecontainer("getActivePage").attr("id");

    console.log(pagetask);

    page = pagetask.substring(0, 5);

    // first page
    if (page === "pageF") {
        $("#koptekst").text("Course Android Development");
        $("#tutorial").text("General support");
    } else {
        task = pagetask.substring(5, 6);
        weeknr = page.substring(4, 5);

        var b = "#a" + weeknr + task + weeknr;
        var c = weekObject[("week" + weeknr)][task - 1];

        if (weeknr == 0) {
            $(b).prepend("<h2>" + "Subject " + task + " " + c + " " + "</h2>");
            // information page
            $("#koptekst").text(weeks[weeknr]);
            $("#tutorial").text("Support");
        } else {
            $(b).prepend("<h3>" + "Task " + task + " " + c + " " + "</h3>");
            // tasks
            $("#koptekst").text("Week " + weeknr + " " + weeks[weeknr]);
            $("#tutorial").text("Week " + weeknr + " support");

        }
    }


/*
    $('#tutorial').on('click', function (event) { 

       //     $('#tutorial').attr('href', "#");

            var vpanel='';

            
        console.log("marco");
            if (page === "pageF")
                {
                vpanel = "#FrontPanel";}
            else
                {
                vpanel = "#myPanel" + weeknr;
                }
        
        console.log(vpanel);
        	$(vpanel).panel({
				defaults : true
			});
			$(vpanel).panel("open");
			$("[data-role = 'listview']").listview({
				defaults : true,
				inset : true
			});

 });
 */
    
    


// zorgen dat het panel de juiste pagina opent.

$('#teacher').on('click', function (event) {
    
    

    if (task > 0)

        $('#teacher').attr('href', "../teacher/index.html");
    else
        $('#teacher').attr('href', "LearningTask/week" + weeknr + "/teacher/index.html");

});

});


function OpenPanel()
{
    
               var vpanel='';

            
 
            
     var pagetask = $.mobile.pageContainer.pagecontainer("getActivePage").attr("id");
      var page = pagetask.substring(0, 5);
     var weeknr = page.substring(4, 5);
    
    if (page === "pageF")
                {
                vpanel = "#FrontPanel";}
            else
                {
                vpanel = "#myPanel" + weeknr;
                }
        
        console.log(vpanel);
        	$(vpanel).panel({
				defaults : true
			});
			$(vpanel).panel("open");
			$("[data-role = 'listview']").listview({
				defaults : true,
				inset : true
			});
    
 return false;   
}


/*

 For the future
 $(document).on('click', '#previousWeek', function(event) {
 var minus;
 minus=weeknr-1;

 $('#previousWeek').attr('href', "#page" + minus);

 });

 $(document).on('click', '#nextWeek', function(event) {

 var plus;
 plus=Number(weeknr) + 1;

 $('#nextWeek').attr('href', "#page" + plus);
 });

 $(document).on('click', '#previousTask', function(event) {
 //	$('#previousTask').attr('href', "#page" + (weeknr - 1));
 var min = Number(task) - 1;
 $('#previousTask').attr('href', "LearningTask/week" + weeknr + "/task" + min + "/Week1LearningTask" + min + ".html");

 });

 $(document).on('click', '#nextTask', function(event) {
 var plus = Number(task) + 1;
 $('#nextTask').attr('href', "LearningTask/week" + weeknr + "/task" + plus + "/Week1LearningTask" + plus + ".html");

 });
 */