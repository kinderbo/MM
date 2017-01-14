from django.db import models
from random import randint
import itertools, os

class Words:
    def __init__(self):
        self.three_words = {}
        self.four_words = {}
        self.five_words = {}
        self.six_words = {}
        module_dir = os.path.dirname(__file__)
        file3_path = os.path.join(module_dir, "static/words/3-letter words.txt")
        file4_path = os.path.join(module_dir, "static/words/4-letter words.txt")
        file5_path = os.path.join(module_dir, "static/words/5-letter words.txt")
        file6_path = os.path.join(module_dir, "static/words/6-letter words.txt")

        # Create dictionary of 3-letter words
        file3 = open(file3_path)
        word = file3.readline()
        while len(word) > 0:
            word = file3.readline()[:3]
            key = ''.join(sorted(word))
            if key not in self.three_words:
                self.three_words[key] = {word}
            else:
                self.three_words[key].add(word)
        file3.close()

        # Create dictionary of 4-letter words
        file4 = open(file4_path)
        word = file4.readline()
        while len(word) > 0:
            word = file4.readline()[:4]
            key = ''.join(sorted(word))
            if key not in self.four_words:
                self.four_words[key] = {word}
            else:
                self.four_words[key].add(word)
        file4.close()

        # Create dictionary of 5-letter words
        file5 = open(file5_path)
        word = file5.readline()
        while len(word) > 0:
            word = file5.readline()[:5]
            key = ''.join(sorted(word))
            if key not in self.five_words:
                self.five_words[key] = {word}
            else:
                self.five_words[key].add(word)
        file5.close()

        # Create dictionary of 6-letter words
        file6 = open(file6_path)
        word = file6.readline()
        while len(word) > 0:
            word = file6.readline()[:6]
            key = ''.join(sorted(word))
            if key not in self.six_words:
                self.six_words[key] = {word}
            else:
                self.six_words[key].add(word)
        file6.close()

        self.allkeys = self.six_words.keys()

    def generate_words(self, word):
        all_words = {}
        all_words[3] = self.generate_n_letter_words(word, 3)
        all_words[4] = self.generate_n_letter_words(word, 4)
        all_words[5] = self.generate_n_letter_words(word, 5)
        all_words[6] = self.generate_n_letter_words(word, 6)
        return all_words

    def generate_n_letter_words(self, word, num_letters):
        x = itertools.combinations(word, num_letters)
        res = set()
        for s in x:
            temp = ''.join(sorted(s))
            if num_letters == 3:
                if temp in self.three_words:
                    res = res | self.three_words[temp]
            elif num_letters == 4:
                if temp in self.four_words:
                    res = res | self.four_words[temp]
            elif num_letters == 5:
                if temp in self.five_words:
                    res = res | self.five_words[temp]
            elif num_letters == 6:
                if temp in self.six_words:
                    res = res | self.six_words[temp]
        return sorted(res)

class GameModel:
    def __init__(self):
        self.words = Words()

        # All possible keys to use
        self.allKeys = []
        for k in self.words.allkeys:
            dic = self.words.generate_words(k)
            max_score_possible = len(dic[3])*30 + len(dic[4])*40 + len(dic[5])*50 + len(dic[6])*60
            if max_score_possible > 300:
                self.allKeys.append(k)

        # get a random key word to start the game
        rand = randint(0, len(self.allKeys) -1)
        self.curKey = self.allKeys[rand]
        self.allKeys.remove(self.curKey)

        self.dict = self.words.generate_words(self.curKey)

        # lists of words that can be generated from the current key
        self.three = self.dict[3]
        self.four = self.dict[4]
        self.five = self.dict[5]
        self.six = self.dict[6]

        # these copies are never modified
        self.three_fixed = list(self.dict[3])
        self.four_fixed = list(self.dict[4])
        self.five_fixed = list(self.dict[5])
        self.six_fixed = list(self.dict[6])

        # list of words that have already been played
        self.played = []

        # total number of words that can be generated
        self.num_words = len(self.dict[3]) + len(self.dict[4]) + len(self.dict[5]) + len(self.dict[6])

    # This method gets the next key word for the game model
    def get_next_key(self):
        n = len(self.allKeys)
        rand = randint(0,n-1)
        key = self.allKeys[rand]
        self.allKeys.remove(key)
        self.curKey = key

        self.dict = self.words.generate_words(self.curKey)
        self.three = self.dict[3]
        self.four = self.dict[4]
        self.five = self.dict[5]
        self.six = self.dict[6]

        self.three_fixed = list(self.dict[3])
        self.four_fixed = list(self.dict[4])
        self.five_fixed = list(self.dict[5])
        self.six_fixed = list(self.dict[6])

        self.num_words = len(self.dict[3]) + len(self.dict[4]) + len(self.dict[5]) + len(self.dict[6])
        self.played = []

    # If the word is valid and if it has not been played yet, return the score
    # Return 0 if the word is valid but it has already been played
    # Return -1 if the word is not valid
    def play_word(self, word):
        length = len(word)
        if not self.is_valid(word):
            return -1
        elif word in self.played:
            return 0

        elif length == 3:
            if word in self.three:
                self.played.append(word)
                self.three.remove(word)
                return 30
        elif length == 4:
            if word in self.four:
                self.played.append(word)
                self.four.remove(word)
                return 40
        elif length == 5:
            if word in self.five:
                self.played.append(word)
                self.five.remove(word)
                return 50
        elif length == 6:
            if word in self.six:
                self.played.append(word)
                self.six.remove(word)
                return 60
        return - 1

    # Check if a word can be formed by the letters from the key
    def is_valid(self, word):
        temp = sorted(self.curKey)
        for char in sorted(word):
            if not char in temp:
                return False
            else:
                temp.remove(char)
        return True

    def printAll(self):
        print(self.three)
        print(self.four)
        print(self.five)
        print(self.six)

    def test(self):
        return "Sending data from GameModel!"
