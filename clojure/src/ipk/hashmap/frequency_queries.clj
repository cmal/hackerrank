(ns hackerrank.ipk.hashmap.frequency_queries
  (:require [clojure.repl :refer [source doc]]
            [clojure.edn :as edn])
  (:use [clojure.test]
        [clojure.pprint]
        [clojure.reflect]))


(defn counter-inc-key [counter k]
  (let [v (get counter k)]
    (if v
      (update counter k inc)
      (assoc counter k 1))))

(defn freqQuery [queries]
  (loop [queries queries
         array {}
         counter {}
         result []]
    (if (empty? queries)
      result
      (let [query (first queries)
            op (first query)
            k (second query)
            v (array k)]
        (case op
          1 (recur
             (rest queries)
             (if v (update array k inc) (assoc array k 1))
             (if v
               (-> counter (update v dec) (counter-inc-key (inc v)))
               (-> counter (counter-inc-key 1)))
             result)
          2 (recur
             (rest queries)
             (if (and v (pos? v)) ;; k 存在
               (update array k dec)
               array)
             (if (and v (pos? v))
               (-> counter (update v dec) (counter-inc-key (dec v)))
               counter)
             result)
          3 (recur
             (rest queries)
             array
             counter
             (conj result (let [ck (counter k)] (if (and ck (not (zero? ck))) 1 0)))))))))

(deftest freqQueryTest
  (is (= [0 1] (freqQuery [[1 1] [2 2] [3 2] [1 1] [1 1] [2 1] [3 2]])))
  (is (= [0 1] (freqQuery [[1 5] [1 6] [3 2] [1 10] [1 10] [1 6] [2 5] [3 2]])))
  (is (= [0 1] (freqQuery [[3 4] [2 1003] [1 16] [3 1]])))
  (is (= [0 1 1] (freqQuery [[1 3] [2 3] [3 2] [1 4] [1 5] [1 5] [1 4] [3 2] [2 4] [3 2]]))))

