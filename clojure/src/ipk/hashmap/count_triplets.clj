(ns hackerrank.ipk.hashmap.count-triplets
  (:require [clojure.repl :refer [source doc]]
            [clojure.edn :as edn])
  (:use [clojure.test]
        [clojure.pprint]
        [clojure.reflect]))

(defn countTriplets [v r]
  )

(deftest countTripletsTest
  (is (= 1 (countTriplets [1 1 1] 1)))
  (is (= 4 (countTriplets [1 1 1 1] 1)))
  (is (= 2 (countTriplets [1 4 16 64] 4)))
  (is (= 2 (countTriplets [1 2 2 4] 2)))
  (is (= 6 (countTriplets [1 3 9 9 27 81] 3)))
  (is (= 4 (countTriplets [1 5 5 25 125] 5)))
  (is (= 3 (countTriplets [1 2 1 2 4] 2))))

