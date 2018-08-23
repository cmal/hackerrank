(ns hackerrank.ipk.hashmap.sherlock-and-anagrams
  (:require [clojure.repl :refer [source doc]]
            [clojure.edn :as edn])
  (:use [clojure.test]
        [clojure.pprint]
        [clojure.reflect]))

(defn sherlockAndAnagrams [s]
  (loop [n (dec (count s))
         sum 0]
    (if (zero? n)
      sum
      (let [cnt (->> (partition n 1 s)
                     (group-by sort)
                     vals
                     (map count)
                     (filter #(> % 1))
                     (map (fn [m] (reduce + (range m))))
                     (reduce +))]
        (recur (dec n) (+ sum cnt))))))

(deftest sherlockAndAnagramsTest
  (is (= 10 (sherlockAndAnagrams "kkkk"))))
