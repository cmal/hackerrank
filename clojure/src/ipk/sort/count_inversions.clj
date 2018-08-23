(ns hackrank.ipk.sort.count-inversions)

(defn merge-sort-inversion [v]
  (let [len (count v)]
    (cond
      (= 1 len) [v 0]
      ;; (= 2 len) (if (> (first v) (get v 2)) [(reverse v) 1] [sq 0])
      :else
      (let [mid      (quot len 2)
            [a ainv] (merge-sort-inversion (subvec v 0 mid))
            [b binv] (merge-sort-inversion (subvec v mid))
            lena     (count a)
            lenb     (count b)]
        (loop [c          []
               i          0
               j          0
               inversions (+ ainv binv)]
          (if (and (< i lena)
                   (< j lenb))
            (let [ai (get a i)
                  bj (get b j)]
              (if (<= ai bj)
                (recur (conj c ai) (inc i) j inversions)
                (recur (conj c bj) i (inc j) (+ inversions (- (count a) i)))))
            [(-> c
                 (into (drop i a))
                 (into (drop j b))) inversions]))))))


(defn countInversions [v]
  (second (merge-sort-inversion v)))
