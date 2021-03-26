let data;
let a;
$(document).ready(function() {
    a = 0;
    createPage();
});

function createPage() {
    a = 1;
    $.when(
        loadSinglePost()
    ).then(function() {
        initComponent();
    });
    a = 4;
}

function loadSinglePost() {
    let def = $.Deferred();
    a = 2;
    $.ajax({
        url: "http://localhost:5000/experiment/post/<int:post_id>",
        dataType: "json",
        type: "GET",
        success: function(result) {
            a = 5;
            data = result;
            def.resolve();
        },
        error: function() {
            data = [];
            def.resolve();
        }
    });
    a = 3;
    return def.promise();
};

function initComponent(){
    a = 6;
    $("#data").text('Result data: ' +  JSON.stringify(data));
}