// Karan's company makes software that provides different features based on the version of operating system of the user.

// For finding which version is more recent, Karan uses the following method:

// function compareVersions (version1, version2) {
//   return parseFloat(version1) >= parseFloat(version2);
// }

// While this function worked for OS versions 10.6, 10.7, 10.8 and 10.9, the Operating system company just released OS version 10.10.

// Karan's function fails for the new version:

// compareVersions ("10.9", "10.10");       // returns true, while it should return false

// Karan now wants to spend some time to right a more robust version comparison function that works for any future version/sub-version updates.

// Help Karan write this function. Here are a few sample cases:

// compareVersions("11", "10");                    // returns true
// compareVersions("11", "11");                    // returns true
// compareVersions("10.4.6", "10.4");              // returns true
// compareVersions("10.4", "11");                  // returns false
// compareVersions("10.4", "10.10");               // returns false
// compareVersions("10.4.9", "10.5");              // returns false

// It can be assumed that version strings are non empty and only contain numeric literals and the character '.'.


function compareVersions (version1, version2) {

    // First, let's quickly check if the versions are EQUAL, and eliminate an easy answer
    if(version1 === version2){
        console.log('fast match, equal and up to date');
        return true;
    }

    // Split the string arguments into arrays, separating each subversion into an index
    let ver1 = version1.split('.');
    let ver2 = version2.split('.');

    // Turn the string indices into numbers for easier comparison
    for(i=0; i<ver1.length; i++){
        ver1.splice(i,1,Number(ver1[i]));
    };
    for(i=0; i<ver2.length; i++){
        ver2.splice(i,1,Number(ver2[i]));
    };

    // Determine which version is longer (has more subversions), so when we push everything into comparisonArray below, we will iterate through the longest.  This ensures that the shorter array will leave 'undefined' elements in the comparisonArray's sub arrays.
    let longerArray;
    if(ver1.length >= ver2.length){
        longerArray = ver1;
    } else {
        longerArray = ver2;
    };
    
    // This array will contain array pairs which will allow us to compare each 'level' of subversion.  For example, if we are comparing 10.4 and 10.6, we will have a comparisonArray of [[10,10], [4,6]].  Each index of comparisonArray represents a version/subversion level, where index 0 is that level for version1, and index 1 is that level for version2.  Here you can also see that we iterate over the longerArray variable, ensuring that if one version1 argument is shorter than the other, that 'undefined's are being placed instead of cutting the total array length.
    let comparisonArray = [];
    for(i=0; i<longerArray.length; i++){
        comparisonArray.push([ver1[i], ver2[i]]);
    };

    // This for loop iterates over the comparisonArray and evaluates each pair to determine if they are up to date or not
    for(i=0; i<comparisonArray.length; i++){
        // Easy false if version1 is less than version2 at the given version/subversion level
        if(comparisonArray[i][0] < comparisonArray[i][1]){
            console.log(`false at level ${i+1}`);
            return false;
        };
        // This is not necessary to complete the problem, but definately helped in trouble shooting the function to see at least how many levels were matching until we hit a unqual level.
        if(comparisonArray[i][0] === comparisonArray[i][1]){
            console.log(`matching at level ${i+1}`);
        };
        // Easy true if version1 is more up to date than version2
        if(comparisonArray[i][0] > comparisonArray[i][1]){
            console.log(`obviously updated`);
            return true;
        };
        // The last two logic statments are to determine if, all things equal up to a point, one version is "longer" and therefore more up to date than the other.  For example: 10.4 vs 10.4.1.  Version2 would be more up to date by virtue of having an extended update and subversion level, given the first two levels are equal, and therefore return false.
        if((Number(comparisonArray[i][0]) === Number(comparisonArray[i][0])) && (comparisonArray[i][1] === undefined)){
            console.log('Version 1 is "longer"');
            return true;
        };
        if((Number(comparisonArray[i][1]) === Number(comparisonArray[i][1])) && (comparisonArray[i][0] === undefined)){
            console.log('Version 2 is "longer"');
            return false;
        };
    };
};

// compareVersions('10.4', '10.4.8')
//  compareVersions("10.1", "10.1");                    // returns true
//  compareVersions("11", "10");                    // returns true
//  compareVersions("10.4.6", "10.4");              // returns true
//  compareVersions("10.4", "11");                  // returns false
//  compareVersions("10.4", "10.10");               // returns false
//  compareVersions("10.4.9", "10.5");              // returns false

// compareVersions("134.188.29.138.67.1.135.3.116.90", "134.188.29.138.67.39.18")

// compareVersions("157.40.128.115.30.113.175.121.67.160", "157.40.128.115.30.43.10.83")