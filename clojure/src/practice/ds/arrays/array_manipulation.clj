(ns practice.ds.arrays.array-manipulation)

(defn arrayManipulation [n queries]
  (let [v (vec (repeat n 0))
        res (loop [qs queries
                   res v]
              (if (empty? qs)
                res
                (let [[a b k] (first qs)]
                  (recur (rest qs)
                         (-> res
                             (update (dec a) #(+ % k))
                             (update b #(- % k)))))))]
    (loop [res res
           sum 0
           m 0]
      (if (empty? res)
        m
        (let [sum (+ sum (first res))]
         (recur (rest res)
                sum
                (max sum m)))))))

