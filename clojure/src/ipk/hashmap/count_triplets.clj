(ns hackerrank.ipk.hashmap.count-triplets
  (:require [clojure.repl :refer [source doc]]
            [clojure.edn :as edn])
  (:use [clojure.test]
        [clojure.pprint]
        [clojure.reflect]))

(defn inc-k [m k v]
  (if (m k)
    (update m k #(+ % v))
    (assoc m k v)))

(defn countTriplets [v r]
  (loop [v v
         freqs {}
         second {}
         cnt 0]
    (if (empty? v)
      cnt
      (let [k  (first v)
            kr (quot k r)]
        (recur (rest v)
               (inc-k freqs k 1)
               (if-let [freq (and (zero? (mod k r)) (freqs kr))]
                 (inc-k second k freq)
                 second)
               (if-let [v (and (zero? (mod k r)) (second kr))]
                 (+ cnt v)
                 cnt))))))

(deftest countTripletsTest
  (is (= 1 (countTriplets [1 1 1] 1)))
  (is (= 4 (countTriplets [1 1 1 1] 1)))
  (is (= 2 (countTriplets [1 4 16 64] 4)))
  (is (= 2 (countTriplets [1 2 2 4] 2)))
  (is (= 6 (countTriplets [1 3 9 9 27 81] 3)))
  (is (= 4 (countTriplets [1 5 5 25 125] 5)))
  (is (= 3 (countTriplets [1 2 1 2 4] 2)))
  (is (= 20 (countTriplets [5 5 5 7 7 5 5 7 7 7] 1)))
  (is (= 10 (countTriplets [9 9 9 9 9] 1)))
  (is (= 120 (countTriplets [4 4 4 4 4 4 4 4 4 4] 1))))

