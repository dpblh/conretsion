package com.example.model

import spray.json.DefaultJsonProtocol

/**
 * Created by bayurov on 13.06.2015.
 */

object RateJsonProtocol extends DefaultJsonProtocol {
  implicit val rate2json = jsonFormat3(Rate)
}

case class Rate(From: String, To: String, var Rate: String) {

}
