(ns hello-bundler.core
  (:require [react]))

(.log js/console react/Component)

(enable-console-print!)

(prn "hello world!")