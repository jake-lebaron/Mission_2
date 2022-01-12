$("#btnCalc").click(function () {
    alert("Calculated Grade: " + ((parseInt($("#numAssignment").val()) * .55) +
        (parseInt($("#numProject").val()) * .05) + (parseInt($("#numQuizzes").val()) * .1) + 
        (parseInt($("#numExams").val()) * .2) + (parseInt($("#numINTEX").val()) * .1)).toFixed(2));

    $("#hockey").fadeToggle("slow");
})