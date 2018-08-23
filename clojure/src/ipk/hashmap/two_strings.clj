(ns hackerrank.ipk.hashmap.two-strings
  (:require [clojure.repl :refer [source doc]]
            [clojure.edn :as edn])
  (:use [clojure.test]
        [clojure.data]
        [clojure.pprint]
        [clojure.reflect]))


(defn twoStrings [s1 s2]
  (if (nil? (last (diff (set s1) (set s2))))
    "NO"
    "YES"))

(deftest twoStringsTest
  (is (= "YES" (twoStrings "hello" "world")))
  (is (= "NO" (twoStrings "hi" "world"))))
