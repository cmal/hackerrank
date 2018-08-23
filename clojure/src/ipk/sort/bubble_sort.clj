(ns hackrank.ipk.sort.bubble-sort)

(def swaps (atom 0))

(defn- bubble [ys x]
  (if-let [y (peek ys)]
    (if (> y x)
      (do
        (swap! swaps inc)
       (conj (pop ys) x y))
      (conj ys x))
    [x]))

(defn bubble-sort [xs]
  (let [ys (reduce bubble [] xs)]
    (if (= xs ys)
      xs
      (recur ys))))

(defn countSwaps [a]
  (let [arr (bubble-sort a)]
    (println (str "Array is sorted in " @swaps " swaps."))
    (println (str "First Element: " (first arr)))
    (println (str "Last Element: " (last arr)))))

