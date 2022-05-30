function bottleSong() {
  let num = 99
    
  while (num >= 1) {
    if (num === 2) {
      console.log (num + " bottles of beer on the wall. " + num + " bottles of beer. \n" + "Take one down and pass it around, " + (num - 1) + " bottle of beer on the wall.")
    } else if (num === 1) {
      console.log("1 bottle of beer on the wall, 1 bottle of beer. \n" + "Take one down and pass it around, no more bottles of beer on the wall." + " No more bottles of beer on the wall, no more bottles of beer.\n" + "Go to the store and buy some more, 99 bottles of beer on the wall.")
    } else {
      console.log(num + " bottles of beer on the wall. " + num + " bottles of beer. \n" + "Take one down and pass it around, " + (num - 1) + " bottles of beer on the wall." )
    }
    num--
  }
}

bottleSong();
