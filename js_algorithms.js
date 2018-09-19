//fizzBuzz

function fizzBuzz(num) {
  for (i = 1; i <= num; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }
}

fizzBuzz(30);


//Harmless Ransom Note

function harmlessRansomNote(noteText, magazineText) {
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  var magazineObj = {};
  
  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });
  
  var noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    }
    else noteIsPossible = false;
  });
  
  return noteIsPossible;
}

harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');


//Is Palindrome

function isPalindrome(string) {
  string = string.toLowerCase();
  var characterArr = string.split('');
  var validCharacter = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var letterArr = [];
  characterArr.forEach(char => {
    if (validCharacter.indexOf(char) > - 1) letterArr.push(char);
  });

  return letterArr.join(' ') === letterArr.reverse().join(' ');
}
  
isPalindrome("Madam, I'm Adam");


//Caesar Cipher

function caeserCipher(str, num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';
 
  for (i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex];
  }
  
  return newString;
}

caeserCipher('James Forster', 8);
  
  
//Reverse Words
  
function reverseWords(string) {
  var wordsArr = string.split(' ');
  reversedWordsArr = [];

  wordsArr.forEach (word => {
    var reverseWord = '';
    for (i = word.length - 1; i >= 0; i--) {
      reverseWord += word[i];
    }
    reversedWordsArr.push(reverseWord);
  });

  return reversedWordsArr.join(' ');
}

reverseWords('james went to the toilet')


//Reverse Array In Place

function reverseArrayInPlace(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  
  return arr;
}
 
reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]);


//Mean Median Mode

function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}
 
function getMean(array) {
  var sum = 0;
  
  array.forEach(num => {
    sum += num;
  });
  
  var mean = sum / array.length;
  return mean;
}
 
function getMedian(array) {
  array.sort(function(a, b){return a-b});
  var median;
  
  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  }
  else {
    var mid1 = array[(array.length / 2) - 1];
    var mid2 = array[array.length / 2];
    median = (mid1 + mid2) / 2;
  }
  
  return median;
}
 
function getMode(array) {
  var modeObj = {};
  
  // create modeObj
  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });
  
  // create array of mode/s 
  var maxFrequency = 0;
  var modes = [];
  for (var num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    }
    else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  // if every value appears same amount of times 
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}
 
meanMedianMode([9,10,23,10,23,9]);


//Two Sum

function twoSum(numArray, sum) {
  var pairs = [];
  var hashTable = [];
 
  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - currNum;
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([ currNum, counterpart ]);
    }
    hashTable.push(currNum);
  }
  
  return pairs;
}
 
twoSum([1, 6, 4, 5, 3, 3], 7);


//Binary Search

function binarySearch(numArray, key) {
    var middleIdx = Math.floor(numArray.length / 2);
    var middleElem = numArray[middleIdx];
    
    if (middleElem === key) return true;
    else if (middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIdx, numArray.length), key);
    }
    else if (middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIdx), key);
    }
    else return false;
}
 
binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);


//Fibonacci

function fibonacci(position) {
  if (position < 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}
 
fibonacci(6);


//Memorized Fibonacci

function fibMemo(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
}
 
fibMemo(500);


//Sieve of Eratosthenes

function sieveOfEratosthenes(n) {
  var primes = [];
  for (var i = 0; i <= n; i++) {
    primes[i] = true;
  }
  
  primes[0] = false;
  primes[1] = false;
  
  for (var i = 2; i <= Math.sqrt(n); i++) {
    for (j = 2; i * j <= n; j++) {
      primes[i * j] = false;
    }
  }
  
  var result = [];
  for (var i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i);
  }
  
  return result;
}
 
sieveOfEratosthenes(49);


//Bubble Sort

function bubbleSort(array) {
    for (var i = array.length; i > 0; i--) {
      for (var j = 0; j < i; j++) {
        if (array[j] > array[j + 1]) {
          var temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    
    return array;
}
 
bubbleSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1]);


//Merge Sort

function mergeSort (arr) {    
    if (arr.length < 2) return arr;
    var middleIndex = Math.floor(arr.length / 2);
    var firstHalf = arr.slice(0, middleIndex);
    var secondHalf = arr.slice(middleIndex);
    
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}
 
function merge (array1, array2) { 
    var result = [];
    while (array1.length && array2.length) {
      var minElem;
      if (array1[0] < array2[0]) minElem = array1.shift();
      else minElem = array2.shift();
      result.push(minElem);
    }
    
    if (array1.length) result = result.concat(array1);
    else result =result.concat(array2);
    return result;
}
 
mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]);


//Max Stock Profit

function maxStockProfit (pricesArr) {
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;
  
  var changeBuyPrice = true;
  
  for (var i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[i + 1];
    
    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    }
    else {
      var tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }
  
  return maxProfit;
}
 
maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]);