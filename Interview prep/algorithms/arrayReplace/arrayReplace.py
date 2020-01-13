def arrayReplace(arr,remove,replaceVal):
    for index in range(len(arr)):
        if arr[index] == remove:
            arr[index] = replaceVal
    return arr
        





print(arrayReplace([1,2,1],1,3))