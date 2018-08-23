(ns hackerrank.ipk.array.2d-array)

(defn get-sum [arr x y]
  (reduce +
          (map (fn [[a b]] (get-in arr [a b]))
               (map (fn [[a b]] [(+ x a) (+ y b)])
                    [[0 0][0 1][0 2][1 1][2 0][2 1][2 2]]))))

; Complete the hourglassSum function below.
(defn hourglassSum [arr]
  (apply max
         (map (partial get-sum arr)
              [0 0 0 0 1 1 1 1 2 2 2 2 3 3 3 3]
              [0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3])))

