const sortByName = (a, b) => {

    var reA = /[^a-zA-Z]/g;
    var reN = /[^0-9]/g;

    var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();

    var aA = nameA.replace(reA, "");
    var bA = nameB.replace(reA, "");

    if ((a.isFolder && b.isFolder) || (!a.isFolder && !b.isFolder)) {
        if(aA === bA) {
            var aN = parseInt(nameA.replace(reN, ""), 10);
            var bN = parseInt(nameB.replace(reN, ""), 10);
            return aN === bN ? 0 : aN > bN ? 1 : -1;
        } else {
            return aA > bA ? 1 : -1;
        }
    } else if (a.isFolder){
        return -1;
    } else {
        return 1;
    }
}

export default sortByName;