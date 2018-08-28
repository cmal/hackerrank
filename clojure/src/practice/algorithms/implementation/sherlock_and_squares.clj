(ns hackerrank.pracetice.algorithms.implementation.sherlock-and-squares)

(defn squares [a b]
  (let [ra (int (Math/sqrt a))
        rb (int (Math/sqrt b))
        res (- rb ra)]
    (if (= a (* ra ra))
      (inc res)
      res)))

