function exportToFile() {
    var myString = "Lorem ipsum.";

    window.open('data:text/csv;charset=utf-8,' + escape(myString));
}
exportToFile();