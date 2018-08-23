(ns hackerrank.ipk.hashmap.ransom_note
  (:require [clojure.repl :refer [source doc]]
            [clojure.edn :as edn])
  (:use [clojure.test]
        [clojure.pprint]
        [clojure.reflect]))

(defn checkMagazine [magazine note]
  (let [freqm (frequencies magazine)
        freqn (frequencies note)]
    (if (every? true? (map #(when-let [freq (freqm (first %))] (<= (second %) freq)) freqn))
      "Yes" "No")))

(deftest checkMagazineTest
  (is (= "Yes" (checkMagazine
                ["give" "me" "one" "grand" "today" "night"]
                ["give" "one" "grand" "today"])))
  (is (= "No" (checkMagazine
               ["two" "times" "three" "is" "not" "four"]
               ["two" "times" "two" "is" "four"])))
  (is (= "No" (checkMagazine
               ["ive" "got" "a" "lovely" "bunch" "of" "coconuts"]
               ["ive" "got" "some" "coconuts"]))))
