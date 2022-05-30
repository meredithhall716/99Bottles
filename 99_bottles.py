def bottle_song():
	
	num = 99
	while (num >= 1):
		if num == 2:
			print(str(num) + " bottles of beer on the wall. " + str(num) + " bottles of beer. \n" + "Take one down and pass it around, " + str(num - 1) + " bottle of beer on the wall.")
		elif num == 1:
			print("1 bottle of beer on the wall, 1 bottle of beer. \n" + "Take one down and pass it around, no more bottles of beer on the wall." + " No more bottles of beer on the wall, no more bottles of beer.\n" + "Go to the store and buy some more, 99 bottles of beer on the wall.")
		else:
			print(str(num) + " bottles of beer on the wall. " + str(num) + " bottles of beer. \n" + "Take one down and pass it around, " + str(num - 1) + " bottles of beer on the wall." )

		num -=1


bottle_song()
