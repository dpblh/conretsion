package com.example.model

import spray.json.DefaultJsonProtocol

/**
 * Created by bayurov on 13.06.2015.
 */

object ConvertibleJsonProtocol extends DefaultJsonProtocol {
  implicit val convertible2json = jsonFormat3(Convertible)
}

case class Convertible(from: String, to: String, sum: Int)
