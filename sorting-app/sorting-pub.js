/**********************************************************
/**********************************************************
Create a module that exports a function that takes a number
as a parameter and stores it in a list. The list should not
be accessible from outside the module.

Export another function that returns a version of the data
list that is sorted in ascending order. The function you
se to sort the data correctly should not be accessible from
outside the module. (Think back to the Custom Sorting
Exercise when handling sorting)

Implement a Node.js script that imports the functionality
of your module, adds at least 5 different data points to
the module's data list, and outputs the sorted list.
@nfdoyle
**********************************************************/
var sortPrivateImport = require("./sorting-private");

sortPrivateImport.pushValue(5);
sortPrivateImport.pushValue(9);
sortPrivateImport.pushValue(4);
sortPrivateImport.pushValue(6);
sortPrivateImport.pushValue(3);

console.log(sortPrivateImport.exportData());